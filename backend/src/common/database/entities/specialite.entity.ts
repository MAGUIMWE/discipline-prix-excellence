import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Departement } from "./departement.entity";
import { Student } from "./student.entity";

@Entity('specialite')
export class Specialite{
    @PrimaryGeneratedColumn()
    speciality_id:number;

    @Column()
    nom_s:string;

    @ManyToOne(()=>Departement,(departement)=>departement.specialites,{nullable:false,onDelete:'CASCADE'})
    departement:Departement;

    @OneToMany(()=>Student,student=>student.specialite)
    students:Student[];
}