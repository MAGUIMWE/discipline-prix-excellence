import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InfractionService } from './infraction.service';
import { createInfractionDto } from './dto/create-infraction.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { UpdateTeacherDto } from '../teacher/dto/update-teacher.dto';
import { UpdateInfractionDto } from './dto/update-infraction.dto';
import { Infraction } from 'src/common/database/entities/infraction.entity';
//@ApiTags('INFRACTION')


@Controller('infraction')
export class InfractionController {
    constructor(private readonly infractionService:InfractionService){}
    
  @Post()
  @ApiOperation({ summary: 'Create a new  infraction' })
  @ApiResponse({ status: 201, description: 'The infraction has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createInfractionDto: createInfractionDto): Promise<Infraction> {
    return this.infractionService.create(createInfractionDto);
  }
  /*
  @Get()
  @ApiOperation({ summary: 'Get all infraction' })
  async findAll(): Promise<Infraction[]> {
    return this.infractionService.findAllInfractions();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a infraction by ID' })
  async findOne(@Param('id') id: number): Promise<Infraction> {
    return this.infractionService.findOne(id)
;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a infraction by ID' })
  async update(
    @Param('id') id: number,
    @Body() UpdateInfractionDto: UpdateInfractionDto,
  ): Promise<Infraction> {
    return this.infractionService.update(id, UpdateInfractionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a infraction by ID' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.infractionService.remove(id)
;
  }*/

}
