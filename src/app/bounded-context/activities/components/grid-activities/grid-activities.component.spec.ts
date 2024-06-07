import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridActivitiesComponent } from './grid-activities.component';

describe('GridActivitiesComponent', () => {
  let component: GridActivitiesComponent;
  let fixture: ComponentFixture<GridActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
