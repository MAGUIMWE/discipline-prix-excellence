import { PartialType } from "@nestjs/swagger"
import { createSpecialiteDto } from "./create-specialite.dto"

export  class updateSpecialiteDto extends  PartialType(createSpecialiteDto) {}