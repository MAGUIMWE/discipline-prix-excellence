import { SanctionDto } from "src/modules/sanction/dto/sanction.dto";
import { StudentDto } from "src/modules/student/dto/student.dto";

export class InfractionDto{

   infra_id:number;

    type:string;

    students:StudentDto;

    sanctions:SanctionDto;
}