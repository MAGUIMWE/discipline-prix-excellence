import { Student } from "src/common/database/entities/student.entity";
import { DataSource } from "typeorm";

export const studentProviders = [
    {
        provide:'STUDENT_REPOSITORY',
        useFactory:(dataSource: DataSource) => dataSource.getRepository(Student),
        inject:['DATA_SOURCE']
    }
]