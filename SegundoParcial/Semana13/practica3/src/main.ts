import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  
  // Habilitar CORS
  app.enableCors();
  
  await app.listen(3000);
  console.log('Aplicación ejecutándose en http://localhost:3000');
  console.log('WebSocket ejecutándose en ws://localhost:3000');
}
bootstrap();