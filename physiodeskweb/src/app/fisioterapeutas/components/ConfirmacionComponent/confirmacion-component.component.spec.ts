import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionComponentComponent } from './confirmacion-component.component';

describe('ConfirmacionComponentComponent', () => {
  let component: ConfirmacionComponentComponent;
  let fixture: ComponentFixture<ConfirmacionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
