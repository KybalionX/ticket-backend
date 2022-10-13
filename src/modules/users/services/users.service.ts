import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/database/models';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  getAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findUserByUsername(username: string) {
    return this.userModel.findOne({ where: { username } });
  }
}
