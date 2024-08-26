import { StudentDto } from "src/modules/student/dto/student.dto";

export class PrixExcellenceDto{
    prix_id:number;

    
    nom:string;

    
    description:string;

    
    annee:Date;

    critere:string;
    
    student:StudentDto;

}