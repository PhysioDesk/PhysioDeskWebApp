import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgonomiczonePageComponent } from './ergonomiczone-page.component';

describe('ErgonomiczonePageComponent', () => {
  let component: ErgonomiczonePageComponent;
  let fixture: ComponentFixture<ErgonomiczonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErgonomiczonePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErgonomiczonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
