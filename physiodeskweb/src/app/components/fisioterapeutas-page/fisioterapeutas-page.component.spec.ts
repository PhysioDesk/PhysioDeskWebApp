import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisioterapeutasPageComponent } from './fisioterapeutas-page.component';

describe('FisioterapeutasPageComponent', () => {
  let component: FisioterapeutasPageComponent;
  let fixture: ComponentFixture<FisioterapeutasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FisioterapeutasPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FisioterapeutasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
