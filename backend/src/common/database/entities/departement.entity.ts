import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Teacher } from "./teacher.entity";
import { Specialite } from "./specialite.entity";

@Entity('departements')
export class Departement{
    @PrimaryGeneratedColumn()
    
    dept_id:number;

    @Column()
    nom_depart:string;

    @OneToMany(()=>Teacher,Teacher=>Teacher.departement)
    teachers:Teacher[];


    @OneToMany(()=>Specialite,(specialite)=>specialite.departement)
    specialites:Specialite[];
}