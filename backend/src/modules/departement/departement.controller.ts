import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DepartementService } from './departement.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { CreateTeacherDto } from '../teacher/dto/create-teacher.dto';
import { UpdateTeacherDto } from '../teacher/dto/update-teacher.dto';
import { Departement } from 'src/common/database/entities/departement.entity';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { createDepartementDto } from './dto/create -departement.dto';

@ApiTags('DEPARTEMENT')

@Controller('departement')
export class DepartementController {

  constructor( private readonly departementService: DepartementService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new departement' })
  @ApiResponse({ status: 201, description: 'The departement has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createDepartementDto: createDepartementDto): Promise<Departement> {
    return this.departementService.create(createDepartementDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all departement' })
  async findAll(): Promise<Departement[]> {
    return this.departementService.findAllTeachers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a departement by ID' })
  async findOne(@Param('id') id: number): Promise<Departement> {
    return this.departementService.findOne(id)
;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a departement by ID' })
  async update(
    @Param('id') id: number,
    @Body() updateDepartementDto: UpdateDepartementDto,
  ): Promise<Departement> {
    return this.departementService.update(id, updateDepartementDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a departement by ID' })
  async supp(@Param('id') id: number): Promise<void> {
    return this.departementService.supp(id)
;
  }
}

