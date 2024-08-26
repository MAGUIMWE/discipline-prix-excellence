import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SanctionService } from './sanction.service';
import { createSanctionDto} from './dto/create-sanction.dto';
import { Sanction } from 'src/common/database/entities/sanction.entity';
import { updateSanctionDto } from './dto/update-sanction.dto';
import { SanctionDto } from './dto/sanction.dto';

@ApiTags('sanction')

@Controller('sanction')
export class SanctionController {
    
  constructor( private readonly sanctionService: SanctionService) {}

  @Post()
  async createSanction(@Body() createSanctionDto: createSanctionDto): Promise<SanctionDto> {
    return this.sanctionService.createSanction(createSanctionDto);
  }

  @Get(':id')
  async getSanctionById(@Param('id') id: number): Promise<SanctionDto> {
    return this.sanctionService.findSanctionById(id)
;
  }

  @Get()
  async getAllSanctions(): Promise<SanctionDto[]> {
    return this.sanctionService.findAllSanctions();
  }
  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a teacher by ID' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.sanctionService.remove(id)
;
  }
  
  @Patch(':id')
  @ApiOperation({ summary: 'Update a sanction by ID' })
  async update(
    @Param('id') id: number,
    @Body() updateSanctionDto: updateSanctionDto,
  ): Promise<SanctionDto> {
    return this.sanctionService.update(id, updateSanctionDto);
  }
}
