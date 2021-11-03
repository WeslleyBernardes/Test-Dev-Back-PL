import { Test, TestingModule } from '@nestjs/testing';
import { FathersController } from './fathers.controller';

describe('FathersController', () => {
  let controller: FathersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FathersController],
    }).compile();

    controller = module.get<FathersController>(FathersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
