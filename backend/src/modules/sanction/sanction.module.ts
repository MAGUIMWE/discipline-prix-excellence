import { Module } from '@nestjs/common';
import { SanctionService } from './sanction.service';
import { SanctionController } from './sanction.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { sanctionProviders } from './sanction.providers';
import { InfractionService } from '../infraction/infraction.service';
import { infractionProviders } from '../infraction/infraction.providers';
import { conseilDisciplineProviders } from '../conseil-discipline/conseilDiscipline.providers';
import { ConseilDisciplineService } from '../conseil-discipline/conseil-discipline.service';

@Module({
  imports:[DatabaseModule],
  providers: [
    ...sanctionProviders,
    ...infractionProviders,
    ...conseilDisciplineProviders
    ,SanctionService],
  controllers: [SanctionController]
})
export class SanctionModule {}
