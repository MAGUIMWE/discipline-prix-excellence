import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Departement } from 'src/common/database/entities/departement.entity';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { Repository } from 'typeorm';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { createDepartementDto } from './dto/create -departement.dto';

@Injectable()
export class DepartementService {
    remove(id: number): void | PromiseLike<void> {
        throw new Error('Method not implemented.');
    }
    constructor(
        @Inject('DEPARTEMENT_REPOSITORY')
        private readonly departementRepository: Repository<Departement>,
      ) {}
      
  async create(createDepartementDto: createDepartementDto): Promise<Departement> {
    const Departement = this.departementRepository.create(createDepartementDto);
    return this.departementRepository.save(Departement);
  }

  async findAllTeachers(): Promise<Departement[]> {
    return this.departementRepository.find();
  }

  async findOne(dept_id: number): Promise<Departement> {
    const Departement = await this.departementRepository.findOneBy({ dept_id });
    if (!Departement) {
      throw new NotFoundException(`Teacher with ID ${dept_id} not found`);
    }
    return Departement;
  }

  async update(id: number, UpdateDepartementDto: UpdateDepartementDto): Promise<Departement> {
    await this.departementRepository.update(id, UpdateDepartementDto);
    return this.findOne(id)
;
  }
  async supp(id: number): Promise<void> {
    const result = await this.departementRepository.delete(id)
;
    if (result.affected === 0) {
      throw new NotFoundException(`departement with ID ${id} not found`);
    }
  }
}
