import { PartialType } from "@nestjs/swagger";
import { createPrixExcellenceDto } from "./create-prix-excellence.dto";

export class updatePrixExcellenceDto extends PartialType(createPrixExcellenceDto){}