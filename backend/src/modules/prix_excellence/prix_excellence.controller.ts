import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { create } from 'domain';
import { PrixExcellenceService } from './prix_excellence.service';
import { createPrixExcellenceDto } from './dto/create-prix-excellence.dto';
import { PrixExcellence } from 'src/common/database/entities/prix_excellence.entity';
import { updatePrixExcellenceDto } from './dto/update-prixExcellenece.dto';
import { PrixExcellenceDto } from './dto/prixExcellence.dto';


@ApiTags('prixExcellence')

@Controller('prix-excellence')
export class PrixExcellenceController {

  constructor( private readonly prixExcellenceservice: PrixExcellenceService) {}

  
  @Post()
  async createPrixExcellence(@Body() createPrixExcellenceDto: createPrixExcellenceDto): Promise<PrixExcellenceDto> {
    return this.prixExcellenceservice.createPrixExcellence(createPrixExcellenceDto);
  }

  
}

