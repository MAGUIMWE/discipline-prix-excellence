import { PartialType } from "@nestjs/swagger";
import { createSanctionDto } from "./create-sanction.dto";

export class updateSanctionDto extends PartialType(createSanctionDto){}