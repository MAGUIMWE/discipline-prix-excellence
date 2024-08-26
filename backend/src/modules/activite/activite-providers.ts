import { Activite } from "src/common/database/entities/activite.entity";
import { DataSource } from "typeorm";

export const ActiviteProviders = [
    {
        provide:'ACTIVITE-REPOSITORY',
        useFactory:(dataSource: DataSource) => dataSource.getRepository(Activite),
        inject:['DATA_SOURCE']
    }
]