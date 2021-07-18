import { TestBed } from '@angular/core/testing';

import { MyInfoRepositoryService } from './my-info-repository.service';

describe('MyInfoRepositoryService', () => {
  let service: MyInfoRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInfoRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
