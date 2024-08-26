import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AppConfigModule } from './common/config/config.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { StudentModule } from './modules/student/student.module';
import { DatabaseModule } from './common/database/database.module';
import { DepartementModule } from './modules/departement/departement.module';
import { ConseilDisciplineModule } from './modules/conseil-discipline/conseil-discipline.module';
import { SpecialiteModule } from './modules/specialite/specialite.module';
import { PrixExcellenceModule } from './modules/prix_excellence/prix_excellence.module';

import { InfractionModule } from './modules/infraction/infraction.module';
import { SanctionModule } from './modules/sanction/sanction.module';
import { TuteurModule } from './modules/tuteur/tuteur.module';
import { UserModule } from './modules/user/user.module';
import { ActiviteModule } from './modules/activite/activite.module';

@Module({
  imports: [DatabaseModule,AppConfigModule,TeacherModule,StudentModule,UserModule,DepartementModule,ConseilDisciplineModule,SpecialiteModule,PrixExcellenceModule,InfractionModule,SanctionModule,TuteurModule,ActiviteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
