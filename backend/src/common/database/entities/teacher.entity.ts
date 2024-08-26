import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Departement } from './departement.entity';
import { Discipline } from './conseil-discipline.entity';

@Entity('teachers')
export class Teacher {
  @PrimaryGeneratedColumn()
  teacher_id: number;

  @Column()
  grade:string;

 @Column()
 statut:string;

  @Column()
  discipline: string;

  @Column({ type: 'date' })
  hiredAt: Date;

  @OneToOne(()=> User)
  @JoinColumn()
  user: User;

  @ManyToOne(()=>Departement,departement=>departement.teachers)
  departement:Departement;

  @ManyToMany(()=>Discipline,(discipline)=>discipline.teachers)
  disciplines:Discipline[];
}