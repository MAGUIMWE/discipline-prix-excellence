import { createUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateUserDto extends PartialType(createUserDto) {}