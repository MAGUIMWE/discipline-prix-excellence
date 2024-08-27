import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Activite } from 'src/common/database/entities/activite.entity';
import { Repository } from 'typeorm';
import { CreateActiviteDto } from './dto/create-activite.dto';
import { UpdateActiviteDto } from './dto/update-activite.dto';
import { existsSync, mkdirSync, renameSync, unlinkSync } from 'fs';
import { join } from 'path';
import *  as fs from 'fs'

@Injectable()
export class ActiviteService {
    constructor(
        @Inject('ACTIVITE-REPOSITORY') 
        private readonly activiteRepository:Repository<Activite>
    ){}
  
async createActivite(createActiviteDto: CreateActiviteDto, file: Express.Multer.File) {
  if (!file) {
    throw new Error('File is missing');
  }

  const filePath = file.path;

  const newPath = `./uploads/${file.filename}`;
  fs.renameSync(filePath,newPath)

  // Vérifier si filePath est bien défini avant de l'utiliser
  

  const activite = this.activiteRepository.create({
    ...createActiviteDto,
    icon: newPath,  // Utiliser le nom de fichier final
  });

  return this.activiteRepository.save(activite);
}



    // async createActivite(titre: string, description: string, file: Express.Multer.File): Promise<Activite> {
    //   const uploadPath = 'uploads/icons';
    //   if (!existsSync(uploadPath)) {
    //     mkdirSync(uploadPath, { recursive: true });
    //   }
  
    //   const filePath = join(uploadPath, file.originalname);
    //   renameSync(file.path, filePath);
  
    //   const activite = new Activite();
    //   activite.titre = titre;
    //   activite.description = description;
    //   activite.image= filePath;
  
    //   return this.activiteRepository.save(activite);
    // }
  
    async getAllActivites(): Promise<Activite[]> {
      return this.activiteRepository.find();
    }
  
    async getActiviteById(id: number): Promise<Activite> {
      const activite = await this.activiteRepository.findOne({where:{id}})
  ;
      if (!activite) {
        throw new NotFoundException(`Activité avec l'ID ${id} non trouvée`);
      }
      return activite;
    }
  
    async updateActivite(id: number, titre?: string, description?: string, file?: Express.Multer.File): Promise<Activite> {
      const activite = await this.activiteRepository.findOne({where:{id}})
  ;
      if (!activite) {
        throw new NotFoundException(`Activité avec l'ID ${id} non trouvée`);
      }
  
      if (titre) {
        activite.titre = titre;
      }
      if (description) {
        activite.description = description;
      }
      if (file) {
        // Supprimer l'ancienne icône si elle existe
        if (existsSync(activite.icon)) {
          unlinkSync(activite.icon);
        }
  
        const uploadPath = 'uploads/icons';
        if (!existsSync(uploadPath)) {
          mkdirSync(uploadPath, { recursive: true });
        }
  
        const filePath = join(uploadPath, file.originalname);
        renameSync(file.path, filePath);
  
        activite.icon = filePath;
      }
  
      return this.activiteRepository.save(activite);
    }
  
    async deleteActivite(id: number): Promise<void> {
      const activite = await this.activiteRepository.findOne({where:{id}})
  ;
      if (!activite) {
        throw new NotFoundException(`Activité avec l'ID ${id} non trouvée`);
      }
  
      // Supprimer le fichier de l'icône si elle existe
      if (existsSync(activite.icon)) {
        unlinkSync(activite.icon);
      }
  
      await this.activiteRepository.remove(activite);
    }
    
      
    
}