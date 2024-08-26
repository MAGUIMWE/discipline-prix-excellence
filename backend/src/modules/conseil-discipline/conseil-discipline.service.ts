import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Discipline } from 'src/common/database/entities/conseil-discipline.entity';
import { Student } from 'src/common/database/entities/student.entity';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { Repository } from 'typeorm';
import { createConseilDisciplineDto } from './dto/create-conseil-discipline.dto';
import {  updateConseilDisciplineDto } from './dto/update-conseilDiscipline.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ConseilDisciplineService {
    constructor(
        @Inject('CONSEILDISCIPLINE_REPOSITORY')
        private readonly conseilDisciplineRepository:Repository<Discipline> ,
       @Inject('TEACHER_REPOSITORY')
        private readonly teacherRepository:Repository<Teacher>,
        @Inject('STUDENT_REPOSITORY')
        private readonly studentRepository:Repository<Student>,
      

    ){}
    
    async create(createConseilDisciplineDto:createConseilDisciplineDto):Promise<Discipline>{
      const {nom_d,description,teacherId,studentId}=createConseilDisciplineDto
      const teacher=await this.teacherRepository.findOne({where:{teacher_id:teacherId}});
      const student=await this.studentRepository.findOne({where:{student_id:studentId}});
      const conseilDiscipline=new Discipline();
      if(!studentId){
        throw new NotFoundException('student is required')
      }
      if(!teacherId){
        throw new NotFoundException('teacher is required')
      }
     
      conseilDiscipline.nom_d=nom_d;
      conseilDiscipline.description=description;

      conseilDiscipline.teachers=[];
      conseilDiscipline.teachers.push(teacher);
      
      conseilDiscipline.students=[];
      conseilDiscipline.students.push(student)

      return this.conseilDisciplineRepository.save(conseilDiscipline);

  }
    
 

async findConsielDisciplineById(decipline_id: number): Promise<Discipline> {
  const conseilDiscipline = await this.conseilDisciplineRepository.findOne({
    where: { decipline_id },
    relations: ['studentId,teacherId'],
  });

  if (!conseilDiscipline) {
    throw new NotFoundException(`consielDiscipline with ID ${decipline_id} not found`);
  }

  return plainToInstance(Discipline,conseilDiscipline);
}

async findAllConseilDisciplines(): Promise<Discipline[]> {
  const conseilDiscipline = await this.conseilDisciplineRepository.find({ relations: ['studentId,teacherId'] });
  return conseilDiscipline.map(conseilDiscipline => plainToInstance(Discipline, conseilDiscipline));
}

}
  
