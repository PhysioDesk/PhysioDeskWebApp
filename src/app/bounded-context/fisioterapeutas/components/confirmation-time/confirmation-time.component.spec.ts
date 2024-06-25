import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationTimeComponent } from './confirmation-time.component';

describe('ConfirmationTimeComponent', () => {
  let component: ConfirmationTimeComponent;
  let fixture: ComponentFixture<ConfirmationTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
