import { Module } from '@nestjs/common';
import { TuteurController } from './tuteur.controller';
import { TuteurService } from './tuteur.service';
import { tuteurProviders } from './tuteur.providers';
import { DatabaseModule } from 'src/common/database/database.module';
import { studentProviders } from '../student/student.providers';
import { StudentService } from '../student/student.service';

@Module({
  imports:[DatabaseModule],
  controllers: [TuteurController],
  providers: [...studentProviders,...tuteurProviders,TuteurService]
})
export class TuteurModule {}
