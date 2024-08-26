import { PrixExcellence } from "src/common/database/entities/prix_excellence.entity";
import { DataSource } from "typeorm";

export const prixExcellenceProviders = [
    {
        provide:'PRIXEXCELLENCE_REPOSITORY',
        useFactory:(dataSource: DataSource) => dataSource.getRepository(PrixExcellence),
        inject:['DATA_SOURCE']
    }
]