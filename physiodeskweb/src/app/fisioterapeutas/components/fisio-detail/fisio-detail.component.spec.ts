import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisioDetailComponent } from './fisio-detail.component';

describe('FisioDetailComponent', () => {
  let component: FisioDetailComponent;
  let fixture: ComponentFixture<FisioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FisioDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FisioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
