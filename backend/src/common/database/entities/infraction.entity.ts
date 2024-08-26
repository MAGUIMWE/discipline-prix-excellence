import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";
import { Sanction } from "./sanction.entity";

@Entity('infraction')

export class Infraction{
    
    @PrimaryGeneratedColumn()
    infra_id:number;

    @Column()
    type:string;

    @ManyToMany(()=>Student,student=>student.infractions)
    @JoinTable()
    students:Student[];

    @ManyToMany(()=>Sanction,sanction=>sanction.infractions)
    @JoinTable()
    sanctions:Sanction[];
}