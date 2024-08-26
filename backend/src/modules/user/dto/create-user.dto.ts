import { StudentDto } from "src/modules/student/dto/student.dto";
import { TeacherDto } from "src/modules/teacher/dto/teacher.dto";

export class createUserDto{

    nom:string;
    
    prenom:string;

    email:string;

    sexe:string;

    telephone:number;

    mot_de_passe:string
    


    role: 'student'|'teacher';
}