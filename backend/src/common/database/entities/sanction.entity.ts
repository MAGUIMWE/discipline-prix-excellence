import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Infraction } from "./infraction.entity";
import { Discipline } from "./conseil-discipline.entity";

@Entity('sanction')

export class Sanction{
    @PrimaryGeneratedColumn()
    sanction_id:number;

    @Column()
    motif_sa:string;

  

    @Column()
    type_sa:string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;


    @Column()
    description_sa:string;

    @ManyToMany(()=>Infraction,infraction=>infraction.sanctions)
    infractions:Infraction[];

    @ManyToOne(()=>Discipline,(discipline)=>discipline.sanction)
    @JoinColumn()
    discipline:Discipline;


}