import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Injectable()
export class FileService {
  private readonly uploadPath = './uploads'; // Répertoire de stockage des fichiers

  getMulterOptions() {
    return {
      storage: diskStorage({
        destination: this.uploadPath,
        filename: (req, file, callback) => {
          const filename: string = `${uuidv4()}${extname(file.originalname)}`;
          callback(null, filename);
        },
      }),
    };
  }
}