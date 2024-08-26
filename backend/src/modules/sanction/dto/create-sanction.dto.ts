import { IsInt, IsNotEmpty } from "class-validator";

export class createSanctionDto{

    motif_sa:string;

    description_sa:string;

    type_sa:string;

    @IsInt()
    @IsNotEmpty()
    disciplineId: number;
    
    infractionIds:number[];

}