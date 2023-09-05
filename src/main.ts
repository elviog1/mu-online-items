import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  // Configura las opciones CORS
  const corsOptions: CorsOptions = {
    origin: ['http://localhost:3001'], // Reemplaza con tu URL de Next.js
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilita el intercambio de cookies y encabezados de autorización
  };

  // Aplica las opciones CORS a la aplicación
  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
