import { CreateStudentDto } from "./create-student.dto";
import { PartialType } from "@nestjs/swagger";

export class updateStudentDto extends PartialType(CreateStudentDto) {}