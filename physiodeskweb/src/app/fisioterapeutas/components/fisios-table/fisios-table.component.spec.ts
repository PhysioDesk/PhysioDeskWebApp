import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisiosTableComponent } from './fisios-table.component';

describe('FisiosTableComponent', () => {
  let component: FisiosTableComponent;
  let fixture: ComponentFixture<FisiosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FisiosTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FisiosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
