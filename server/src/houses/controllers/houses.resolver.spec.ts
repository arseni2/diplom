import { Test, TestingModule } from '@nestjs/testing';
import { HousesResolver } from './houses.resolver';
import { HousesService } from '../services/houses.service';

describe('HousesResolver', () => {
  let resolver: HousesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HousesResolver, HousesService],
    }).compile();

    resolver = module.get<HousesResolver>(HousesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
