import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Specify the frontend origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  });
  await app.listen(3001);
}
bootstrap();
