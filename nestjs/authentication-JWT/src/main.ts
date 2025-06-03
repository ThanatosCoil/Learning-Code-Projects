import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// точка входа в приложение

async function bootstrap() {
  // создаёт приложение
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // запускает приложение
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
