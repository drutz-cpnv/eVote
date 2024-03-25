import { TestBed } from '@angular/core/testing';

import { SubjectFormGroupService } from './subject-form-group.service';

describe('SubjectFormGroupService', () => {
  let service: SubjectFormGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectFormGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
