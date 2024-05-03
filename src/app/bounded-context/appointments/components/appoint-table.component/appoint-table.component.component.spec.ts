import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointTableComponentComponent } from './appoint-table.component.component';

describe('AppointTableComponentComponent', () => {
  let component: AppointTableComponentComponent;
  let fixture: ComponentFixture<AppointTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointTableComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
