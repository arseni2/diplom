import { Test, TestingModule } from '@nestjs/testing';
import { AppealResolver } from './appeal.resolver';
import { AppealService } from '../services/appeal.service';

describe('AppealResolver', () => {
  let resolver: AppealResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppealResolver, AppealService],
    }).compile();

    resolver = module.get<AppealResolver>(AppealResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
