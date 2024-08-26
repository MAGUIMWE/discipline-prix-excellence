import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { DatabaseModule } from 'src/common/database/database.module';
import { teacherProviders } from '../teacher/teacher.providers';

import { studentProviders } from '../student/student.providers';
import { StudentService } from '../student/student.service';

@Module({ 
    imports: [DatabaseModule],
    providers: [...userProviders,...teacherProviders,...studentProviders,UserService],
    controllers: [UserController],
})
export class UserModule {}
