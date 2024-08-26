import { PartialType } from "@nestjs/swagger";
import { createConseilDisciplineDto } from "./create-conseil-discipline.dto";

export class updateConseilDisciplineDto extends PartialType(createConseilDisciplineDto){}