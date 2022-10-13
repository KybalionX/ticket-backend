import { Module } from '@nestjs/common';

import DatabaseConfig from '../../database/database.module';
import Configuration from 'src/config/configuration';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule, DatabaseConfig, Configuration],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
