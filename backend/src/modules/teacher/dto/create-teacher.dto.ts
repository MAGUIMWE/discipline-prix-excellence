import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateTeacherDto {
  @IsNotEmpty()
  @IsString()
  teacherId: string;

  @IsNotEmpty()
  @IsString()
  grade: string;

  @IsNotEmpty()
  @IsString()
  discipline: string;

  @IsNotEmpty()
  @IsString()
  statut: string;

  @IsNotEmpty()
  @IsDateString()
  hiredAt: Date;

  departementId:number;
}