import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class createDepartementDto{
    

  @IsNotEmpty()
  @IsString()
  nom_depart: string;

  @IsArray()
  @IsOptional()
  teacherIds:number[]

 
}