import { Test, TestingModule } from '@nestjs/testing';
import { FathersService } from './fathers.service';

describe('FathersService', () => {
  let service: FathersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FathersService],
    }).compile();

    service = module.get<FathersService>(FathersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
