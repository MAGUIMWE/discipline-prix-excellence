import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Departement } from 'src/common/database/entities/departement.entity';
import { Specialite } from 'src/common/database/entities/specialite.entity';
import { Repository } from 'typeorm';
import { updateSpecialiteDto } from './dto/update-specialite.dto';
import { createSpecialiteDto } from './dto/create-specialite.dto';
import { SpecialiteDto } from './dto/specialite.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class SpecialiteService {
    remove(id: number): void | PromiseLike<void> {
        throw new Error('Method not implemented.');
    }
    constructor(
        @Inject('SPECIALITE_REPOSITORY')
        private readonly specialiteRepository: Repository<Specialite>,
        @Inject('DEPARTEMENT_REPOSITORY')
        private readonly departementRepository:Repository<Departement>
      ) {}
      
  async createSpecialite(createSpecialiteDto: createSpecialiteDto): Promise<SpecialiteDto> {
    const { nom_s,departementId } = createSpecialiteDto;
    if(!departementId){
      throw new NotFoundException('departementId is required');
    }
    
    const departement = await this.departementRepository.findOne({where:{dept_id:departementId}});
    if (!departement) {
      throw new NotFoundException(`departement with ID ${departementId} not found`);
    }

    const specialite = this.specialiteRepository.create({
      nom_s,
      departement,
    });

    return this.specialiteRepository.save(specialite);
    return plainToInstance(SpecialiteDto, specialite);
  }

  async findSpecialiteById(speciality_id: number): Promise<SpecialiteDto> {
    const sanction = await this.specialiteRepository.findOne({
      where: { speciality_id:speciality_id },
      relations: ['departement'],
    });

    if (!Specialite) {
      throw new NotFoundException(`specialite with ID ${speciality_id} not found`);
    }

    return plainToInstance(SpecialiteDto, Specialite);
  }

  async findAllSpecialites(): Promise<SpecialiteDto[]> {
    const specialites = await this.specialiteRepository.find({ relations: ['departement'] });
    return specialites.map(specialite => plainToInstance(SpecialiteDto, specialite));
  }
  
  async update(speciality_id: number, updateSpecialiteDto: updateSpecialiteDto): Promise<SpecialiteDto> {
    await this.specialiteRepository.update(speciality_id, updateSpecialiteDto);
    return this.specialiteRepository.findOne({where:{speciality_id:speciality_id}});
;
  }
  
  async supp(speciality_id: number): Promise<void> {
    const result = await this.specialiteRepository.delete(speciality_id)
;
    if (result.affected === 0) {
      throw new NotFoundException(`specialite with ID ${speciality_id} not found`);
    }
  }
    }