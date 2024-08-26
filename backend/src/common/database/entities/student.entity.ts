import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Discipline } from './conseil-discipline.entity';
import { PrixExcellence } from './prix_excellence.entity';
import { Infraction } from './infraction.entity';
import { Specialite } from './specialite.entity';
import { Tuteur } from './tuteur.entity';

@Entity('students')
export class Student {

  @PrimaryGeneratedColumn()
  student_id:number;

  @Column({length:10})
  matricule: string;
  
  @Column()
  niveau:string;

  @OneToOne(()=> User)
  @JoinColumn()
  user: User;

  @ManyToMany(()=>Discipline,discipline=>discipline.students)
  disciplines:Discipline[];

  @OneToMany(()=>PrixExcellence,prixExcellence=>prixExcellence.student)
  prixExcellences:PrixExcellence[];


 

  @ManyToOne(()=>Specialite,specialite=>specialite.students,{onDelete:'CASCADE'})
  specialite:Specialite;

  @OneToMany(()=>Tuteur,tuteur=>tuteur.student)
  @JoinColumn()
  tuteurs:Tuteur[];

  @ManyToMany(()=>Infraction,infraction=>infraction.students)
  infractions:Infraction[];

  @Column()
  enrolledAt: Date;
}