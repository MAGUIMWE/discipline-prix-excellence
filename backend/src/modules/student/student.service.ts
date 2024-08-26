import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Student } from 'src/common/database/entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { updateStudentDto } from './dto/update-student.dto';
import { Specialite } from 'src/common/database/entities/specialite.entity';
import { StudentDto } from './dto/student.dto';
import { plainToInstance } from 'class-transformer';
import { SanctionDto } from '../sanction/dto/sanction.dto';

@Injectable()
export class StudentService {
    constructor(@Inject('STUDENT_REPOSITORY') 
    private studentRepository:Repository<Student>,
    @Inject('SPECIALITE_REPOSITORY')
     private readonly specialiteRepository:Repository<Specialite>){}
    
     async createStudent(CreateStudentDto: CreateStudentDto): Promise<StudentDto> {
      const { matricule,niveau, specialiteId } = CreateStudentDto;
      if (!specialiteId){
        throw new NotFoundException('specailiteId is required')
      }
      
      const specialite = await this.specialiteRepository.findOne({where:{speciality_id:specialiteId}});
      if (!specialite) {
        throw new NotFoundException(`specialite with ID ${specialiteId} not found`);
      } 
  
      const student = this.studentRepository.create({
        matricule,
        niveau,
        specialite,
      });
  
      await this.studentRepository.save(student);
      return plainToInstance(StudentDto, student);
    }


  async findStudentById(student_id: number): Promise<StudentDto> {
    const student = await this.studentRepository.findOne({
      where: { student_id },
      relations: ['specialite'],
    });

    if (!student) {
      throw new NotFoundException(`student with ID ${student_id} not found`);
    }

    return plainToInstance(StudentDto, student);
  }

  async findAllStudents(): Promise<StudentDto[]> {
    const students = await this.studentRepository.find({ relations: ['specialite'] });
    return students.map(student => plainToInstance(StudentDto, student));
  }
  
  
  async update(student_id: number, updateStudentDto: updateStudentDto): Promise<StudentDto> {
    const student = await this.studentRepository.findOne({
      where: { student_id: student_id },
      relations: ['specialite'],  // Charger les relations si nécessaire
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${student_id} not found`);
    }

    // Mise à jour des champs de l'étudiant
    Object.assign(student, updateStudentDto);

    // Mise à jour des relations (clés étrangères)
    if (updateStudentDto.specialiteId) {
      const specialite = await this.specialiteRepository.findOne({where:{speciality_id:updateStudentDto.specialiteId}});
      if (!specialite) {
        throw new BadRequestException(`Conseiller with ID ${updateStudentDto.specialiteId} not found`);
      }
      student.specialite = specialite;
    }

    await this.studentRepository.save(student);

    return plainToInstance(StudentDto, student);
  }
  
  async remove(id: number): Promise<void> {
    const result = await this.studentRepository.delete(id)
;
    if (result.affected === 0) {
      throw new NotFoundException(`student with ID ${id} not found`);
    }
  }

}
