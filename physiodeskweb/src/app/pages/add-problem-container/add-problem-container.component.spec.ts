import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProblemContainerComponent } from './add-problem-container.component';

describe('AddProblemContainerComponent', () => {
  let component: AddProblemContainerComponent;
  let fixture: ComponentFixture<AddProblemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProblemContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProblemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
