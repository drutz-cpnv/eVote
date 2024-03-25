import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSubjectPageComponent } from './adm-subject-page.component';

describe('AdmSubjectPageComponent', () => {
  let component: AdmSubjectPageComponent;
  let fixture: ComponentFixture<AdmSubjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmSubjectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmSubjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
