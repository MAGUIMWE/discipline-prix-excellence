import { Module } from '@nestjs/common';
import { ConseilDisciplineController } from './conseil-discipline.controller';
import { ConseilDisciplineService } from './conseil-discipline.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { conseilDisciplineProviders } from './conseilDiscipline.providers';
import { studentProviders } from '../student/student.providers';
import { teacherProviders } from '../teacher/teacher.providers';
import { sanctionProviders } from '../sanction/sanction.providers';
import { StudentService } from '../student/student.service';
import { TeacherService } from '../teacher/teacher.service';
import { SanctionService } from '../sanction/sanction.service';
 

@Module({
  imports:[DatabaseModule],
  controllers: [ConseilDisciplineController],
  providers: [
    ...conseilDisciplineProviders,
    ...studentProviders,
    ...teacherProviders,
    ...sanctionProviders,
    ConseilDisciplineService,
    SanctionService]
})
export class ConseilDisciplineModule {}
