import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateStudentDto{
    @IsNotEmpty()
  @IsString()
  matricule: string;

  @IsNotEmpty()
  @IsString()
  niveau: string;

  specialiteId:number;
 

  

}