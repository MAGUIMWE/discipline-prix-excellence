import { Discipline } from "src/common/database/entities/conseil-discipline.entity";
import { DataSource } from "typeorm";

export const conseilDisciplineProviders = [
    {
        provide:'CONSEILDISCIPLINE_REPOSITORY',
        useFactory:(dataSource: DataSource) => dataSource.getRepository(Discipline),
        inject:['DATA_SOURCE']
    }
]