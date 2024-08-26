import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Infraction } from 'src/common/database/entities/infraction.entity';
import { Sanction } from 'src/common/database/entities/sanction.entity';
import { Student } from 'src/common/database/entities/student.entity';
import { Repository } from 'typeorm';
import { createInfractionDto } from './dto/create-infraction.dto';
import { promises } from 'dns';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { UpdateTeacherDto } from '../teacher/dto/update-teacher.dto';
import { UpdateInfractionDto } from './dto/update-infraction.dto';
import { InfractionDto } from './dto/infraction.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class InfractionService {
    findAllInfractions(): Infraction[] | PromiseLike<Infraction[]> {
        throw new Error('Method not implemented.');
    }

    constructor(
        @Inject('INFRACTION_REPOSITORY')
        private readonly infractionRepository:Repository<Infraction>,
        @Inject('STUDENT_REPOSITORY')
        private readonly studentRepository:Repository<Student>,
        @Inject('SANCTION_REPOSITORY')
        private readonly sanctionRepository:Repository<Sanction>
    ){}
    async create(createInfractionDto:createInfractionDto):Promise<Infraction>{
      const {type,sanctionId,studentId}=createInfractionDto
      const sanction=await this.sanctionRepository.findOne({where:{sanction_id:sanctionId}});
      const student=await this.studentRepository.findOne({where:{student_id:studentId}});
      const infraction=new Infraction();
      if(!studentId){
        throw new NotFoundException('student is required')
      }
      if(!sanctionId){
        throw new NotFoundException('sanction is required')
      }
     
      infraction.type=type;
    

      infraction.sanctions=[];
      infraction.sanctions.push(sanction);
      
      infraction.students=[];
      infraction.students.push(student)

      return this.infractionRepository.save(infraction);

  }
    
    }
    




