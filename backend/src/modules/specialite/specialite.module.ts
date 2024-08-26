import { Module } from '@nestjs/common';
import { SpecialiteController } from './specialite.controller';
import { SpecialiteService } from './specialite.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { specialiteProviders } from './specialite.providers';
import { studentProviders } from '../student/student.providers';
import { StudentService } from '../student/student.service';
import { departementProviders } from '../departement/departement.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [SpecialiteController],
  providers: [...departementProviders,...studentProviders,...specialiteProviders,SpecialiteService]
})
export class SpecialiteModule {}
