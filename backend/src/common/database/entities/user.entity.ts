import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Student } from './student.entity';
import { Teacher } from './teacher.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nom: string;

  @Column()
  prenom:string;

  @Column()
  sexe:string;

  @Column()
  telephone:number;

  @Column({ unique: true })
  email: string;

  @Column({type:'enum',enum:['student' ,'teacher']})
  role:'student'|'teacher';

  @Column()
  dateNaiss:Date;

  @Column()
  mot_de_passe: string;
  

  @OneToOne(() => Student, student => student.user)
  students: Student;

  @OneToOne(() => Teacher, teacher => teacher.user)
  teachers: Teacher;
}