import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('activite')

export class Activite{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    titre:string;
    @Column()
    description:string;
    @Column()
    image:string;

}