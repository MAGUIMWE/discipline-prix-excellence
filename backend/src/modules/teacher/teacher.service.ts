import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Departement } from 'src/common/database/entities/departement.entity';
import { TeacherDto } from './dto/teacher.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class TeacherService {
  constructor(
    @Inject('TEACHER_REPOSITORY')
    private readonly teacherRepository: Repository<Teacher>,
    @Inject('DEPARTEMENT_REPOSITORY')
    private readonly departemenetRepository:Repository<Departement>
  ) {}

  async createTeacher(CreateTeacherDto: CreateTeacherDto): Promise<TeacherDto> {
    const { statut,discipline,hiredAt,grade, departementId } = CreateTeacherDto;
    
    const departement = await this.departemenetRepository.findOne({where:{dept_id:departementId}});
    if(!departementId){
      throw new NotFoundException('DepartementId not found');
    }
    if (!departement) {
      throw new NotFoundException(`departement with ID ${departementId} not found`);
    }

    const teacher = this.teacherRepository.create({
      grade,
      statut,
      discipline,
      hiredAt,
      departement,
    });

    await this.teacherRepository.save(teacher);
    return plainToInstance(TeacherDto, teacher);
  }


  async findOne(teacher_id: number): Promise<Teacher> {
    const teacher = await this.teacherRepository.findOneBy({ teacher_id });
    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${teacher_id} not found`);
    }
    return teacher;
  }


  async remove(id: number): Promise<void> {
    const result = await this.teacherRepository.delete(id)
;
    if (result.affected === 0) {
      throw new NotFoundException(`Teacher with ID ${id} not found`);
    }
  }
  async  updateTeacher(teacher_id:number,updateTeacherDto:UpdateTeacherDto):Promise<TeacherDto>{
    const teacher=await this.teacherRepository.findOne({where:{teacher_id}});
    if (!teacher){
      throw new NotFoundException('teacher not found')
    }
    if(updateTeacherDto.grade)
    {
      teacher.grade=updateTeacherDto.grade
    }
    if(updateTeacherDto.statut)
      {
        teacher.statut=updateTeacherDto.statut
      }
      if(updateTeacherDto.discipline)
        {
          teacher.discipline=updateTeacherDto.discipline
        }
        if(updateTeacherDto.hiredAt)
          {
            teacher.hiredAt=updateTeacherDto.hiredAt
          }
    if(updateTeacherDto.departementId){
      const departement= await this.departemenetRepository.findOne({where:{dept_id:updateTeacherDto.departementId}});
      if(!departement){
        throw new NotFoundException('departement not found');
      }
      teacher.departement=departement;
    }
    return this.teacherRepository.save(teacher)
  }
  

  
  async findTeacherById(teacher_id: number): Promise<TeacherDto> {
    const teacher = await this.teacherRepository.findOne({
      where: { teacher_id:teacher_id },
      relations: ['departement'],
    });

    if (!teacher) {
      throw new NotFoundException(`teacher with ID ${teacher_id} not found`);
    }

    return plainToInstance(TeacherDto, teacher);
  }

  async findAllTeachers(): Promise<TeacherDto[]> {
    const teacher = await this.teacherRepository.find({ relations: ['departement'] });
    return teacher.map(teacher => plainToInstance(TeacherDto, teacher));
  }
}