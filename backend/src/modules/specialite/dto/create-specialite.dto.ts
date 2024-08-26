import {  IsInt, IsNotEmpty, IsString } from "class-validator";

export class createSpecialiteDto{
    @IsString()
    nom_s:string;


   
    @IsNotEmpty()
    @IsInt()
    departementId: number;

    studentIds:number[];


}