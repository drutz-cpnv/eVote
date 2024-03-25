import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFormGroupComponent } from './subject-form-group.component';

describe('SubjectFormGroupComponent', () => {
  let component: SubjectFormGroupComponent;
  let fixture: ComponentFixture<SubjectFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectFormGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
