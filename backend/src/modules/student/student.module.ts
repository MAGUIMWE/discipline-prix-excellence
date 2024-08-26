import { Module } from '@nestjs/common';


import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { studentProviders } from './student.providers';
import { DatabaseModule } from 'src/common/database/database.module';
import { specialiteProviders } from '../specialite/specialite.providers';
import { SpecialiteService } from '../specialite/specialite.service';

@Module({
  imports:[DatabaseModule],
  controllers: [StudentController],
  providers: [...specialiteProviders,...studentProviders,StudentService]
})
export class StudentModule {}
