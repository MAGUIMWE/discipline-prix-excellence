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
    if(!studentId){
      throw new NotFoundException( 'studentId is required')
    }
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
  async findTuteurById(tu_id: number): Promise<TuteurDto> {
    const tuteur = await this.tuteurRepository.findOne({
      where: { tu_id:tu_id },
      relations: ['student'],
    });

    if (!tuteur) {
      throw new NotFoundException(`teacher with ID ${tu_id} not found`);
    }

    return plainToInstance(TuteurDto, tuteur);
  }
 async findOne(tu_id:number):Promise<Tuteur>{
  return await this.tuteurRepository.findOne({where:{tu_id}})

 }
 async findAll():Promise<Tuteur[]>{
  return this.tuteurRepository.find()
 }
 async remove(id: number): Promise<void> {
  const result = await this.tuteurRepository.delete(id)
;
  if (result.affected === 0) {
    throw new NotFoundException(`tuteur with ID ${id} not found`);
  }
}
async update(tu_id:number,updateTuteurDto:updateTuteurDto):Promise<Tuteur>
{
  const tuteur=await this.tuteurRepository.findOne({where:{tu_id}})
  if(!tuteur){
    throw new NotFoundException(`tuteur avec l'tu_id ${tu_id} not found`)
  }
  Object.assign(tuteur,updateTuteurDto)
  return this.tuteurRepository.save(tuteur)
}}