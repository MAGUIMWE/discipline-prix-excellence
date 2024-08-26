import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Student } from 'src/common/database/entities/student.entity';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { User } from 'src/common/database/entities/user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { CreateStudentDto } from '../student/dto/create-student.dto';
import { CreateTeacherDto } from '../teacher/dto/create-teacher.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { promises } from 'dns';

@Injectable()
export class UserService {
  findAllUser(): Teacher[] | PromiseLike<Teacher[]> {
    throw new Error('Method not implemented.');
  }
    constructor(
        @Inject('TEACHER_REPOSITORY')
        private  teacherRepository: Repository<Teacher>,
        @Inject('USER_REPOSITORY')
        private  userRepository: Repository<User>,
        @Inject('STUDENT_REPOSITORY')
        private  studentRepository: Repository<Student>,
      ) {}

async create(createUserDto: createUserDto, specificDto: CreateStudentDto | CreateTeacherDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);

    if (createUserDto.role === 'student') {
      const student = this.studentRepository.create({ ...specificDto,user });
      await this.studentRepository.save(student);
    }
    else if (createUserDto.role==='teacher') {
        const teacher = this.teacherRepository.create({
          ...specificDto, user})
         
        await this.teacherRepository.save(teacher);
    }

    return user;  
}
async findOne(id: number): Promise<User> {
  const user= await this.userRepository.findOneBy({ id });
  if (!user) {
    throw new NotFoundException(`user with ID ${id} not found`);
  }
  return user;
}
async update(id: number, UpdateUserDto: UpdateUserDto): Promise<User> {
  await this.userRepository.update(id, UpdateUserDto);
  return this.findOne(id)
}
async remove(id: number): Promise<void> {
  const result = await this.userRepository.delete(id)
;
  if (result.affected === 0) {
    throw new NotFoundException(`user with ID ${id} not found`);
  }
}

}




    

  


