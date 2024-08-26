import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";

@Entity('tuteur')

export class Tuteur{
    @PrimaryGeneratedColumn()
    tu_id:number;

    @Column()
    nom:string;

    @Column()
    telephone:number;

    @Column()
    email:string;

    @OneToOne(()=>Student,student=>student.tuteurs)
    student:Student;

}