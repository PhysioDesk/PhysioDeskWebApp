import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheActivitiesPageComponent } from './the-activities-page.component';

describe('TheActivitiesPageComponent', () => {
  let component: TheActivitiesPageComponent;
  let fixture: ComponentFixture<TheActivitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheActivitiesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheActivitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
