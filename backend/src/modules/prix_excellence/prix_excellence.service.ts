import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PrixExcellence } from 'src/common/database/entities/prix_excellence.entity';
import { updatePrixExcellenceDto } from './dto/update-prixExcellenece.dto';
import {  createPrixExcellenceDto } from './dto/create-prix-excellence.dto';
import { Student } from 'src/common/database/entities/student.entity';
import { PrixExcellenceDto } from './dto/prixExcellence.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class PrixExcellenceService {
    constructor(
        @Inject('PRIXEXCELLENCE_REPOSITORY')
        private readonly prixEcellenceRepository: Repository<PrixExcellence>,
        @Inject('STUDENT_REPOSITORY')
        private readonly studentRepository:Repository<Student>
      ) {}


  async createPrixExcellence(createPrixExcellenceDto: createPrixExcellenceDto): Promise<PrixExcellenceDto> {
    const { annee,nom,description,studentId,critere} =createPrixExcellenceDto ;
    
    const student = await this.studentRepository.findOne({where:{student_id:studentId}});
    if(!studentId){
      throw new NotFoundException('studentId is required')
    }
    if (!student) {
      throw new NotFoundException(`student with ID ${studentId} not found`);
    }

    const prixExcellence = this.prixEcellenceRepository.create({
      description,
      nom,
      annee,
      critere,
      student,
    });

    await this.prixEcellenceRepository.save(prixExcellence);
    return plainToInstance(PrixExcellenceDto, prixExcellence);
  }
    }
    

