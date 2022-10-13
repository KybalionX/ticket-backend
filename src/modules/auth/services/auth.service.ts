import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { UserDTO } from '../../users/dtos/user.dto';
import {
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userData: UserDTO) {
    const matched = await this.userService.findUserByUsername(
      userData.username,
    );

    if (matched === null) {
      throw new NotFoundException('Not user found with that username');
    }

    if (!(matched.password === userData.password)) {
      throw new UnauthorizedException('No match passwords');
    }

    return {
      token: this.jwtService.sign({ username: userData.username }),
    };
  }
}
