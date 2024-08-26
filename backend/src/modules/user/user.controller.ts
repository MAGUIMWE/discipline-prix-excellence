import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateStudentDto } from '../student/dto/create-student.dto';
import { CreateTeacherDto } from '../teacher/dto/create-teacher.dto';
import { createUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { UpdateTeacherDto } from '../teacher/dto/update-teacher.dto';
import { User } from 'src/common/database/entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { promises } from 'dns';
@ApiTags('USER')

@Controller('user')
export class UserController {

  constructor(private readonly UserService: UserService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  async findOne(@Param('id') id: number): Promise<User> {
    return this.UserService.findOne(id)
;
  }

  @Post()
  async create(
    @Body() createUserDto:createUserDto,
    @Body() specificDto: CreateStudentDto | CreateTeacherDto
  ) {
    return await this.UserService.create(createUserDto, specificDto);
  }
  
  @Patch(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  async update(
    @Param('id') id: number,
    @Body() UpdateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.UserService.update(id, UpdateUserDto);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.UserService.remove(id)
;
  }
  
  
  }


