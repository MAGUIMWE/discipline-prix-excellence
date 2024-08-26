import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { teacherProviders } from './teacher.providers';
import { departementProviders } from '../departement/departement.providers';
import { DepartementService } from '../departement/departement.service';


@Module({
  imports: [DatabaseModule],
  controllers: [TeacherController],
  providers: [...departementProviders,...teacherProviders,TeacherService,DepartementService],
})
export class TeacherModule {}