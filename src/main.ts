import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    'https://web-smartsystems.com.co/',
    'http://localhost:5173',
  ];
  // app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
