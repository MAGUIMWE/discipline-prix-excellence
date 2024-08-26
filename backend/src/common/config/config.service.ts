import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  // Getter pour obtenir l'hôte de la base de données
  get databaseHost(): string {
    return this.configService.get<string>('DB_HOST');
  }

  // Getter pour obtenir le port de la base de données
  get databasePort(): number {
    return Number(this.configService.get<number>('DB_PORT'));
  }

  // Getter pour obtenir le nom d'utilisateur de la base de données
  get databaseUser(): string {
    return this.configService.get<string>('DB_USERNAME');
  }

  // Getter pour obtenir le mot de passe de la base de données
  get databasePassword(): string {
    return this.configService.get<string>('DB_PASSWORD');
  }

  // Getter pour obtenir le nom de la base de données
  get databaseName(): string {
    return this.configService.get<string>('DB_NAME');
  }

  // Vous pouvez également ajouter d'autres getters pour d'autres configurations si nécessaire
}