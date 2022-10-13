import { ConfigModule } from '@nestjs/config';

const config = ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
});

export default config;
