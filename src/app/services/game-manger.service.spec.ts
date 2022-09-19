import { TestBed } from '@angular/core/testing';

import { GameMangerService } from './game-manger.service';

describe('GameMangerService', () => {
  let service: GameMangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameMangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
