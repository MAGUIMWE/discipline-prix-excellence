import { Module } from '@nestjs/common';
import { InfractionController } from './infraction.controller';
import { InfractionService } from './infraction.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { infractionProviders } from './infraction.providers';
import { studentProviders } from '../student/student.providers';
import { StudentService } from '../student/student.service';
import { sanctionProviders } from '../sanction/sanction.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [InfractionController],
  providers: [...sanctionProviders,...studentProviders,...infractionProviders,InfractionService]
})
export class InfractionModule {}
