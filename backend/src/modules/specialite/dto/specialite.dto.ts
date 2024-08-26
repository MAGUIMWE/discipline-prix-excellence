import { DepartementDto } from "src/modules/departement/dto/departement.dto";

export class SpecialiteDto{

    speciality_id:number;

    nom_s:string;

    departement:DepartementDto;
}