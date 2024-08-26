import { StudentDto } from "src/modules/student/dto/student.dto";
import { TeacherDto } from "src/modules/teacher/dto/teacher.dto";

export class UserDto{
    nom:string;

    prenom:string;

    email:string;

    sexe:string;

    telephone:number;

    role: 'student'|'teacher';
    student:StudentDto;
    
    teacher:TeacherDto;
}