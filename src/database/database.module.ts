import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models';
import { ConfigService } from '@nestjs/config';

const sequelize = SequelizeModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    database: config.get('DATABASE_NAME'),
    host: config.get('DATABASE_HOST'),
    port: config.get('DATABASE_PORT'),
    username: config.get('DATABASE_USERNAME'),
    password: config.get('DATABASE_PASSWORD'),
    dialect: 'mysql',
    models: [User],
  }),
});

export default sequelize;
