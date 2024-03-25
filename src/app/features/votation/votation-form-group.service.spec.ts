import { TestBed } from '@angular/core/testing';

import { VotationFormGroupService } from './votation-form-group.service';

describe('VotationFormGroupService', () => {
  let service: VotationFormGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotationFormGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
