import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsPageComponentComponent } from './appointments-page.component.component';

describe('AppointmentsPageComponentComponent', () => {
  let component: AppointmentsPageComponentComponent;
  let fixture: ComponentFixture<AppointmentsPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsPageComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentsPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
