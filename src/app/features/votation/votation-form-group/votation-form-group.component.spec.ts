import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotationFormGroupComponent } from './votation-form-group.component';

describe('VoteFormGroupComponent', () => {
  let component: VotationFormGroupComponent;
  let fixture: ComponentFixture<VotationFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotationFormGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotationFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
