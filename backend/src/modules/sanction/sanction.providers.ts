import { Sanction } from "src/common/database/entities/sanction.entity";
import { DataSource } from "typeorm";

export const sanctionProviders = [
    {
        provide:'SANCTION_REPOSITORY',
        useFactory:(dataSource: DataSource) => dataSource.getRepository(Sanction),
        inject:['DATA_SOURCE']
    }
]