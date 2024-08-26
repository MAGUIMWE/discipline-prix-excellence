import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Sanction } from 'src/common/database/entities/sanction.entity';
import { createSanctionDto } from './dto/create-sanction.dto';
import { plainToInstance } from 'class-transformer';
import { Discipline } from 'src/common/database/entities/conseil-discipline.entity';
import { SanctionDto } from './dto/sanction.dto';
import { updateSanctionDto } from './dto/update-sanction.dto';

@Injectable()
export class SanctionService {
    constructor(
        @Inject('SANCTION_REPOSITORY')
        private readonly sanctionRepository: Repository<Sanction>,
        @Inject('CONSEILDISCIPLINE_REPOSITORY')
        private readonly conseilDisciplineRepository:Repository<Discipline>
      ) {}
      async createSanction(createSanctionDto: createSanctionDto): Promise<SanctionDto> {
        const { motif_sa,description_sa,type_sa, disciplineId } = createSanctionDto;
        if(!disciplineId){
          throw new NotFoundException('disciplineId is required')
        }
        
        const discipline = await this.conseilDisciplineRepository.findOne({where:{decipline_id:disciplineId}});
        
        if (!discipline) {
          throw new NotFoundException(`discipline with ID ${disciplineId} not found`);
        }
    
        const sanction = this.sanctionRepository.create({
           description_sa,
           motif_sa,
           type_sa,
           discipline,
        });
    
        await this.sanctionRepository.save(sanction);
        return plainToInstance(SanctionDto, sanction);
      }

  async findSanctionById(sanction_id: number): Promise<SanctionDto> {
    const sanction = await this.sanctionRepository.findOne({
      where:{sanction_id},
      relations: ['discipline','discipline.teachers'],
    });

    if (!sanction) {
      throw new NotFoundException(`Sanction with ID ${sanction_id} not found`);
    }

    return plainToInstance(SanctionDto, sanction);
  }

  async findAllSanctions(): Promise<SanctionDto[]> {
    const sanctions = await this.sanctionRepository.find({ relations: ['discipline'] });
    return sanctions.map(sanction => plainToInstance(SanctionDto, sanction));
  }
  
  async remove(id: number): Promise<void> {
    const result = await this.sanctionRepository.delete(id)
;
    if (result.affected === 0) {
      throw new NotFoundException(`sanction with ID ${id} not found`);
    }
  }
  async update(sanction_id: number, updateSanctionDto: updateSanctionDto): Promise<SanctionDto> {
    await this.sanctionRepository.update(sanction_id, updateSanctionDto);
    return this.sanctionRepository.findOne({where:{sanction_id:sanction_id}});
;
  }
  

}
