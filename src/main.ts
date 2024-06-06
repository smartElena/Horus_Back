import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    'https://web-smartsystems.com.co/',
    'http://localhost:5173',
    // Añade otros dominios que necesites permitir
  ];
  // app.setGlobalPrefix('api');
  app.enableCors({
    origin: (origin, callback) => {
      // Permitir solicitudes sin origen (como las hechas por Postman o cURL)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('No permitido por CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });
  await app.listen(3000);
}
bootstrap();
