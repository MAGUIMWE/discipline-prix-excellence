import { Tuteur } from "src/common/database/entities/tuteur.entity";
import { DataSource } from "typeorm";

export const tuteurProviders = [
    {
        provide:'TUTEUR_REPOSITORY',
        useFactory:(dataSource: DataSource) => dataSource.getRepository(Tuteur),
        inject:['DATA_SOURCE']
    }
]