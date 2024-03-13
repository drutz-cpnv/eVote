import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRowComponent } from './hero-row.component';

describe('HeroRowComponent', () => {
  let component: HeroRowComponent;
  let fixture: ComponentFixture<HeroRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
