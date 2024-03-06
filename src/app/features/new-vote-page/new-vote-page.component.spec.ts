import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVotePageComponent } from './new-vote-page.component';

describe('NewVotePageComponent', () => {
  let component: NewVotePageComponent;
  let fixture: ComponentFixture<NewVotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewVotePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewVotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
