import { Test, TestingModule } from '@nestjs/testing';
import { ConseilDisciplineController } from './conseil-discipline.controller';

describe('ConseilDisciplineController', () => {
  let controller: ConseilDisciplineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConseilDisciplineController],
    }).compile();

    controller = module.get<ConseilDisciplineController>(ConseilDisciplineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
