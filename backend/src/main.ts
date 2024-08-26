import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './common/swagger/swagger.config';

const corsConfig={
  origin:'http://localhost:5173',
  credentials:true,
  methods:['GET','POST','PUT','DELETE'],
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app)
  app.enableCors(corsConfig);
  app.setGlobalPrefix('api')
  await app.listen(4000);
}
bootstrap();
