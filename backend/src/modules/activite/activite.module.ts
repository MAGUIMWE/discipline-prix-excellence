import { Module } from '@nestjs/common';
import { ActiviteController } from './activite.controller';
import { ActiviteService } from './activite.service';
import { ActiviteProviders } from './activite-providers';
import { DatabaseModule } from 'src/common/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [ActiviteController],
  providers: [...ActiviteProviders,ActiviteService]
})
export class ActiviteModule {}
