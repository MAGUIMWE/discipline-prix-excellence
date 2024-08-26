import { Inject, Injectable } from '@nestjs/common';
import { Activite } from 'src/common/database/entities/activite.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActiviteService {
    constructor(
        @Inject('ACTIVITE-REPOSITORY') 
        private readonly activiteRepository:Repository<Activite>
    ){}
    
}
