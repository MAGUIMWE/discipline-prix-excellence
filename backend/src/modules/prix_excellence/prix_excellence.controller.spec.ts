import { Test, TestingModule } from '@nestjs/testing';
import { PrixExcellenceController } from './prix_excellence.controller';

describe('PrixExcellenceController', () => {
  let controller: PrixExcellenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrixExcellenceController],
    }).compile();

    controller = module.get<PrixExcellenceController>(PrixExcellenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
