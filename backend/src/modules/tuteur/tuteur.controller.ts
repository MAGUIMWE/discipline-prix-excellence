import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { create } from 'domain';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { CreateTeacherDto } from '../teacher/dto/create-teacher.dto';
import { UpdateTeacherDto } from '../teacher/dto/update-teacher.dto';
import { TeacherService } from '../teacher/teacher.service';
import { TuteurService } from './tuteur.service';
import { CreateTuteurDto } from './dto/create-tuteur.dto';
import { Tuteur } from 'src/common/database/entities/tuteur.entity';
import { updateTuteurDto } from './dto/update-tuteur.dto';
import { TuteurDto } from './dto/tuteur.dto';


@ApiTags('tuteur')
@Controller('tuteur')
export class TuteurController {
    constructor( private readonly tuteurService:TuteurService){}

    @Post()
  @ApiOperation({ summary: 'Create a new teacher' })
  @ApiResponse({ status: 201, description: 'The teacher has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
 
  async createTuteur(@Body() CreateTuteurDto: CreateTuteurDto): Promise<TuteurDto> {
    return this.tuteurService.createTuteur(CreateTuteurDto);
  }
  @Get(':id')
  async findOne(@Param('id')id:number):Promise<Tuteur> {
     return this.tuteurService.findOne(id)
  }
  @Get()
  async findAll():Promise<Tuteur[]>{
    return this.tuteurService.findAll()
  }
  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a teacher by ID' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.tuteurService.remove(id)
;
  }
  @Patch(':id')
  async update(@Param('id')id:number,@Body()updateTuteurDto:updateTuteurDto){
    return this.tuteurService.update(id,updateTuteurDto)
  }

  
}

