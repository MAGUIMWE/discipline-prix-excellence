import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './common/swagger/swagger.config';
import { join } from 'path';
import { NestApplication } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';


const corsConfig={
  origin:'http://localhost:5173',
  credentials:true,
  methods:['GET','POST','PUT','DELETE'],
};

async function bootstrap() {
  const app = await NestFactory.create <NestExpressApplication>(AppModule);
  setupSwagger(app)
  app.enableCors(corsConfig);
  app.useStaticAssets(join(__dirname, '..', 'uploads')); 
  app.setGlobalPrefix('api')
  await app.listen(4000);
}
bootstrap();
