import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubjectPageComponent } from './new-subject-page.component';

describe('NewSubjectPageComponent', () => {
  let component: NewSubjectPageComponent;
  let fixture: ComponentFixture<NewSubjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSubjectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSubjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
