import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointTableComponent } from './appoint-table.component';

describe('AppointTableComponent', () => {
  let component: AppointTableComponent;
  let fixture: ComponentFixture<AppointTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
