import { Test, TestingModule } from '@nestjs/testing';
import { ChildrensController } from './childrens.controller';

describe('ChildrensController', () => {
  let controller: ChildrensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChildrensController],
    }).compile();

    controller = module.get<ChildrensController>(ChildrensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
