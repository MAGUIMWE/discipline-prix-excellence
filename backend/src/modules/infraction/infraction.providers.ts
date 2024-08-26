import { Infraction } from "src/common/database/entities/infraction.entity";
import { DataSource } from "typeorm";

export const infractionProviders = [
    {
        provide:'INFRACTION_REPOSITORY',
        useFactory:(dataSource: DataSource) => dataSource.getRepository(Infraction),
        inject:['DATA_SOURCE']
    }
]