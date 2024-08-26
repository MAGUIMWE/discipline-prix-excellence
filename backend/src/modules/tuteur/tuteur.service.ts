import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tuteur } from 'src/common/database/entities/tuteur.entity';
import { CreateTuteurDto } from './dto/create-tuteur.dto';
import { updateTuteurDto } from './dto/update-tuteur.dto';
import { Student } from 'src/common/database/entities/student.entity';
import { TuteurDto } from './dto/tuteur.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class TuteurService {
  constructor(
    @Inject('TUTEUR_REPOSITORY')
    private readonly tuteurRepository: Repository<Tuteur>,
    @Inject('STUDENT_REPOSITORY')
    private readonly studentRepository:Repository<Student>
  ) {}

  


  async createTuteur(CreateTuteurDto: CreateTuteurDto): Promise<TuteurDto> {
    const {nom,telephone,email,studentId } = CreateTuteurDto;
    
    // Vérifier si l'étudiant avec l'ID spécifié existe
    const student = await this.studentRepository.findOne({where:{student_id:studentId}});
    if (!student) {
      throw new BadRequestException(`Student with ID ${studentId} not found`);
    }

    // Créer une nouvelle instance de Tutor en associant l'étudiant trouvé
    const tuteur = this.tuteurRepository.create({
      nom,
      telephone,
      email,
      student,
    });

    // Sauvegarder le tuteur dans la base de données
    await this.tuteurRepository.save(tuteur);

    // Retourner le tuteur sous forme de DTO
    return plainToInstance(TuteurDto, tuteur);
  }
}