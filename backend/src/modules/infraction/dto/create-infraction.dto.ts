import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createInfractionDto{
    @IsNotEmpty()
    @IsString()
    type:string;

    @IsNumber()
    sanctionId:number;

    @IsNumber()
    studentId:number;

}