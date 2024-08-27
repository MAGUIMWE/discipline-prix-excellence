import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ActiviteService } from './activite.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StudentDto } from '../student/dto/student.dto';
import { CreateActiviteDto } from './dto/create-activite.dto';
import { Activite } from 'src/common/database/entities/activite.entity';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';


@Controller('activite')
export class ActiviteController {
    constructor(private readonly activiteService: ActiviteService,
         ) {}
         @Post()
         @UseInterceptors(FileInterceptor('icon', {
           storage: diskStorage({
             destination: './uploads', // Dossier où les fichiers seront stockés
             filename: (req, file, cb) => {
               const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
               cb(null, uniqueSuffix + '-' + file.originalname);
             },
           }),
         }))
         createActivite(@Body() createActiviteDto: CreateActiviteDto, @UploadedFile() file: Express.Multer.File) {
           console.log('File received:', file);
           return this.activiteService.createActivite(createActiviteDto, file);
         }
       
      
       
         @Get()
         async getAllActivites() {
           return this.activiteService.getAllActivites();
         }
       
         @Get(':id')
         async getActiviteById(@Param('id') id: number) {
           return this.activiteService.getActiviteById(id)
       ;
         }
       
         @Put(':id')
         @UseInterceptors(FileFieldsInterceptor([{ name: 'icon', maxCount: 1 }]))
         async updateActivite(
           @Param('id') id: number,
           @Body() updateActiviteDto: { titre?: string; description?: string },
           @UploadedFiles() files: { icon?: Express.Multer.File[] },
         ) {
           const iconFile = files.icon ? files.icon[0] : null;
           return this.activiteService.updateActivite(id, updateActiviteDto.titre, updateActiviteDto.description, iconFile);
         }
       
         @Delete(':id')
         async deleteActivite(@Param('id') id: number) {
           return this.activiteService.deleteActivite(id)
       ;
         }
  
  
}
