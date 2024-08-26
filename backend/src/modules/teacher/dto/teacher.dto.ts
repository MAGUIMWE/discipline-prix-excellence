import { DepartementDto } from "src/modules/departement/dto/departement.dto";

 export class TeacherDto{
    teacher_id: number;

   
    grade:string;
  

   statut:string;
  

    discipline: string;

    departement:DepartementDto;
  
 }