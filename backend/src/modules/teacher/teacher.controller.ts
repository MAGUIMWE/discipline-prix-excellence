import { Controller, Get, Post, Body, Param, Patch, Delete, Inject } from '@nestjs/common';

import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeacherService } from './teacher.service';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherDto } from './dto/teacher.dto';

@ApiTags('teachers')
@Controller('teachers')
export class TeacherController {

  constructor( private readonly teacherService: TeacherService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new teacher' })
  @ApiResponse({ status: 201, description: 'The teacher has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
 
  async createTeacher(@Body() CreateTeacherDto: CreateTeacherDto): Promise<TeacherDto> {
    return this.teacherService.createTeacher(CreateTeacherDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all teachers' })
  async findAll(): Promise<TeacherDto[]> {
    return this.teacherService.findAllTeachers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a teacher by ID' })
  async findOne(@Param('id') id: number): Promise<Teacher> {
    return this.teacherService.findOne(id)
;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a teacher by ID' })
  async updateTeacher(
    @Param('id') id: number,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ): Promise<TeacherDto> {
    return this.teacherService.updateTeacher(id, updateTeacherDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a teacher by ID' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.teacherService.remove(id)
;
  }
}