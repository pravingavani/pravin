import { TestBed } from '@angular/core/testing';

import { GithupFollowersService } from './githup-followers.service';

describe('GithupFollowersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithupFollowersService = TestBed.get(GithupFollowersService);
    expect(service).toBeTruthy();
  });
});
