import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { create } from 'domain';
import { Tuteur } from 'src/common/database/entities/tuteur.entity';
import { CreateTuteurDto } from '../tuteur/dto/create-tuteur.dto';
import { updateTuteurDto } from '../tuteur/dto/update-tuteur.dto';
import { TuteurService } from '../tuteur/tuteur.service';
import { SpecialiteService } from './specialite.service';
import { Specialite } from 'src/common/database/entities/specialite.entity';
import { createSpecialiteDto } from './dto/create-specialite.dto';
import { updateSpecialiteDto } from './dto/update-specialite.dto';
import { SpecialiteDto } from './dto/specialite.dto';
  
@ApiTags('SPECIALITE')

@Controller('specialite')
export class SpecialiteController {

  constructor( private readonly specialiteService: SpecialiteService) {}

  @Post()
  async createSpecialite(@Body() createSpecialiteDto: createSpecialiteDto): Promise<SpecialiteDto> {
    return this.specialiteService.createSpecialite(createSpecialiteDto);
  }


  @Get(':id')
  async getSpecialiteById(@Param('id') id: number): Promise<SpecialiteDto> {
    return this.specialiteService.findSpecialiteById(id)
;
  }

  @Get()
  async getAllSpecialites(): Promise<SpecialiteDto[]> {
    return this.specialiteService.findAllSpecialites();
  }
    
  @Patch(':id')
  @ApiOperation({ summary: 'Update a specialite by ID' })
  async update(
    @Param('id') id: number,
    @Body() updateSpecialiteDto: updateSpecialiteDto,
  ): Promise<SpecialiteDto> {
    return this.specialiteService.update(id, updateSpecialiteDto);
  }
  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specialite by ID' })
  async supp(@Param('id') speciality_id: number): Promise<void> {
    return this.specialiteService.remove(speciality_id)
;
  }
}

