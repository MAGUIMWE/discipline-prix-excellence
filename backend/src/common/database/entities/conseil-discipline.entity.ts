import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Teacher } from "./teacher.entity";
import { Student } from "./student.entity";
import { Sanction } from "./sanction.entity";

@Entity('conseil_discipline')
export class Discipline{
    @PrimaryGeneratedColumn()
    decipline_id:number;

    @Column()
    nom_d:string;

    @Column()
    description:string;

    @ManyToMany(()=>Teacher,(teacher)=>teacher.disciplines)
    @JoinTable( )
    teachers:Teacher[];

    @ManyToMany(()=>Student,(student)=>student.disciplines)
    @JoinTable(

    )
    students:Student[];

    @OneToOne(()=>Sanction,sanction=>sanction.discipline)
    sanction:Sanction;

}