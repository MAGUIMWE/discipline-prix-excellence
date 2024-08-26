import { Module } from '@nestjs/common';
import { DepartementService } from './departement.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { departementProviders } from './departement.providers';
import { DepartementController } from './departement.controller';
import { specialiteProviders } from '../specialite/specialite.providers';
import { SpecialiteService } from '../specialite/specialite.service';
import { teacherProviders } from '../teacher/teacher.providers';

@Module({
    imports:[DatabaseModule],
    controllers:[DepartementController],
    providers:[...teacherProviders,...specialiteProviders,...departementProviders,DepartementService, SpecialiteService]
})
export class DepartementModule {}
