import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSheetComponent } from './vote-sheet.component';

describe('VoteModalComponent', () => {
  let component: VoteSheetComponent;
  let fixture: ComponentFixture<VoteSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
