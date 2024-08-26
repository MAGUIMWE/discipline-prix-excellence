import { Specialite } from "src/common/database/entities/specialite.entity";
import { DataSource } from "typeorm";


export const specialiteProviders = [
    {
        provide:'SPECIALITE_REPOSITORY',
        useFactory:(dataSource: DataSource) => dataSource.getRepository(Specialite),
        inject:['DATA_SOURCE']
    }
]