import { Test, TestingModule } from '@nestjs/testing';
import { ConseilDisciplineService } from './conseil-discipline.service';

describe('ConseilDisciplineService', () => {
  let service: ConseilDisciplineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConseilDisciplineService],
    }).compile();

    service = module.get<ConseilDisciplineService>(ConseilDisciplineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
