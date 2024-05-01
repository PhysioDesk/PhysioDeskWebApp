import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemasTableComponent } from './problemas-table.component';

describe('ProblemasTableComponent', () => {
  let component: ProblemasTableComponent;
  let fixture: ComponentFixture<ProblemasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemasTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProblemasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
