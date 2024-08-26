import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { CreateTeacherDto } from '../teacher/dto/create-teacher.dto';
import { UpdateTeacherDto } from '../teacher/dto/update-teacher.dto';
import { updateStudentDto } from './dto/update-student.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from 'src/common/database/entities/student.entity';
import { StudentDto } from './dto/student.dto';

@ApiTags('STUDENT')

@Controller('student')
export class StudentController {

  constructor( private readonly studentService: StudentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new student' })
  @ApiResponse({ status: 201, description: 'The student has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createStudent(@Body() CreateStudentDto: CreateStudentDto): Promise<StudentDto> {
    return this.studentService.createStudent(CreateStudentDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a student by ID' })
  async getstudentById(@Param('id') id: number): Promise<StudentDto> {
    return this.studentService.findStudentById(id)
;
  }

  @Get()

  @ApiOperation({ summary: 'Get all students' })
 
  async getAllStudents(): Promise<StudentDto[]> {
    return this.studentService.findAllStudents();
  }
  
  @Patch(':id')
  @ApiOperation({ summary: 'Update a student by ID' })
  async update(
    @Param('id') id: number,
    @Body() updateStudentDto: updateStudentDto,
  ): Promise<StudentDto> {
    return this.studentService.update(id, updateStudentDto);
  }
  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a student by ID' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.studentService.remove(id)
;
  }


  
  
}
