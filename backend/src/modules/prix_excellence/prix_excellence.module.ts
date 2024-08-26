import { Module } from '@nestjs/common';
import { PrixExcellenceController } from './prix_excellence.controller';
import { PrixExcellenceService } from './prix_excellence.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { prixExcellenceProviders } from './prixExcellence.providers';
import { studentProviders } from '../student/student.providers';
import { StudentService } from '../student/student.service';

@Module({
  imports:[DatabaseModule],
  controllers: [PrixExcellenceController],
  providers: [...prixExcellenceProviders,...studentProviders,PrixExcellenceService]
})
export class PrixExcellenceModule {}
