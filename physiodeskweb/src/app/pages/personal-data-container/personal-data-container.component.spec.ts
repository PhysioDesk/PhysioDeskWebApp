import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataContainerComponent } from './personal-data-container.component';

describe('PersonalDataContainerComponent', () => {
  let component: PersonalDataContainerComponent;
  let fixture: ComponentFixture<PersonalDataContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalDataContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
