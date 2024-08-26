import { IsNotEmpty, IsString, IsDateString, IsNumber, isNotEmpty, isString } from 'class-validator';
import { Student } from 'src/common/database/entities/student.entity';

export class CreateTuteurDto{
  tu_id:number;

  @IsNotEmpty()
  @IsString()
  nom:string

  @IsNotEmpty()
  @IsNumber()
  telephone:number;

  @IsNotEmpty()
  @IsString()
 
  email:string;

  
  @IsNumber()
  studentId:number;
   
  



  

}

  

