import { Test, TestingModule } from '@nestjs/testing';
import { PrixExcellenceService } from './prix_excellence.service';

describe('PrixExcellenceService', () => {
  let service: PrixExcellenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrixExcellenceService],
    }).compile();

    service = module.get<PrixExcellenceService>(PrixExcellenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
