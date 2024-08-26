import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { CreateTeacherDto } from '../teacher/dto/create-teacher.dto';
import { UpdateTeacherDto } from '../teacher/dto/update-teacher.dto';
import { TeacherService } from '../teacher/teacher.service';
import { ConseilDisciplineService } from './conseil-discipline.service';
import { createConseilDisciplineDto } from './dto/create-conseil-discipline.dto';
import { Discipline } from 'src/common/database/entities/conseil-discipline.entity';
import { updateConseilDisciplineDto } from './dto/update-conseilDiscipline.dto';
@ApiTags('CONSEIL DE DISCIPLINE')

@Controller('conseil-discipline')
export class ConseilDisciplineController {
    constructor( private readonly conseilDisciplineService: ConseilDisciplineService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new  discipline' })
  @ApiResponse({ status: 201, description: 'The discipline has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createConseilDisciplineDto: createConseilDisciplineDto): Promise<Discipline> {
    return this.conseilDisciplineService.create(createConseilDisciplineDto);
  }

  @Get(':id')
  async getConseilDisciplineById(@Param('id') id: number): Promise<Discipline> {
    return this.conseilDisciplineService.findConsielDisciplineById(id)
;
  }

  @Get()
  async getAllConseilDsisciplines(): Promise<Discipline[]> {
    return this.conseilDisciplineService.findAllConseilDisciplines();
  }
  

}