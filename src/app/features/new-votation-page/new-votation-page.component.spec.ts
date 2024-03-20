import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVotationPageComponent } from './new-votation-page.component';

describe('NewVotePageComponent', () => {
  let component: NewVotationPageComponent;
  let fixture: ComponentFixture<NewVotationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewVotationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewVotationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
