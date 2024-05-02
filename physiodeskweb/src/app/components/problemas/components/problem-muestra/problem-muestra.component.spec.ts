import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemMuestraComponent } from './problem-muestra.component';

describe('ProblemMuestraComponent', () => {
  let component: ProblemMuestraComponent;
  let fixture: ComponentFixture<ProblemMuestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemMuestraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProblemMuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
