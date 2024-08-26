import { PartialType } from "@nestjs/swagger";
import { createInfractionDto } from "./create-infraction.dto";

export class UpdateInfractionDto extends PartialType(createInfractionDto){}