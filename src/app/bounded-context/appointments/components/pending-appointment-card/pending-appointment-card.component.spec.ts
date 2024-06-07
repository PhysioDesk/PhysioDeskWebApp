import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAppointmentCardComponent } from './pending-appointment-card.component';

describe('PendingAppointmentCardComponent', () => {
  let component: PendingAppointmentCardComponent;
  let fixture: ComponentFixture<PendingAppointmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingAppointmentCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PendingAppointmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
