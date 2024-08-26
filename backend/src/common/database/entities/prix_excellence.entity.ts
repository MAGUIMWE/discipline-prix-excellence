import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";

@Entity('prix_excellence')

export class PrixExcellence{
    @PrimaryGeneratedColumn()
    prix_id:number;

    @Column()
    nom:string;

    @Column()
    description:string;
    @Column()
    annee:Date;

    @Column()
    critere:string;

@ManyToOne(()=>Student,student=>student.prixExcellences,{onDelete:'CASCADE'})
student:Student;
}