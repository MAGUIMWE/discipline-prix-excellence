import { ConseilDisciplineDto } from "src/modules/conseil-discipline/dto/conseilDiscipline.dto";

export class SanctionDto{

    sanction_id: number;

    motif_sa:string;
    
    type_sa:string;

    description_sa: string;

    createdAt: Date;

    updatedAt: Date;

    discipline: ConseilDisciplineDto;
}