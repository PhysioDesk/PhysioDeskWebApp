import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigNotificationsPageComponent } from './config-notifications-page.component';

describe('ConfigNotificationsPageComponent', () => {
  let component: ConfigNotificationsPageComponent;
  let fixture: ComponentFixture<ConfigNotificationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigNotificationsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigNotificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
