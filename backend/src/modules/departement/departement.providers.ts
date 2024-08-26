import { Departement } from "src/common/database/entities/departement.entity";
import { DataSource } from "typeorm";

export const departementProviders = [
    {
        provide:'DEPARTEMENT_REPOSITORY',
        useFactory:(dataSource: DataSource) => dataSource.getRepository(Departement),
        inject:['DATA_SOURCE']
    }
]