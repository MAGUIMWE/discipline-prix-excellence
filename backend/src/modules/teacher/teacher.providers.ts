import { Teacher } from "src/common/database/entities/teacher.entity";
import { DataSource } from "typeorm";

export const teacherProviders = [
    {
        provide:'TEACHER_REPOSITORY',
        useFactory:(dataSource: DataSource) => dataSource.getRepository(Teacher),
        inject:['DATA_SOURCE']
    }
]