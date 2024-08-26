import { PartialType } from "@nestjs/swagger";
import { createDepartementDto } from "./create -departement.dto";

export class UpdateDepartementDto extends PartialType(createDepartementDto) {}