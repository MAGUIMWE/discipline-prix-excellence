import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { create } from 'domain';
import { Teacher } from 'src/common/database/entities/teacher.entity';
import { CreateTeacherDto } from '../teacher/dto/create-teacher.dto';
import { UpdateTeacherDto } from '../teacher/dto/update-teacher.dto';
import { TeacherService } from '../teacher/teacher.service';
import { TuteurService } from './tuteur.service';
import { CreateTuteurDto } from './dto/create-tuteur.dto';
import { Tuteur } from 'src/common/database/entities/tuteur.entity';
import { updateTuteurDto } from './dto/update-tuteur.dto';


@ApiTags('tuteur')
@Controller('tuteur')
export class TuteurController {

}

