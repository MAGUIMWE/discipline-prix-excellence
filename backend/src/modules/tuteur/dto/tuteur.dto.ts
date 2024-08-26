import { Student } from "src/common/database/entities/student.entity";
import { StudentDto } from "src/modules/student/dto/student.dto";

export class TuteurDto{
    
    tu_id:number;

    nom:string;

    telephone:number;

    email:string;
    
    student:StudentDto;

}