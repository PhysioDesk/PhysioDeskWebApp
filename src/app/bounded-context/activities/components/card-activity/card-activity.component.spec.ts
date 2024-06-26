import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActivityComponent } from './card-activity.component';

describe('CardActivityComponent', () => {
  let component: CardActivityComponent;
  let fixture: ComponentFixture<CardActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
