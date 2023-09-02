import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationseekerComponent } from './notificationseeker.component';

describe('NotificationseekerComponent', () => {
  let component: NotificationseekerComponent;
  let fixture: ComponentFixture<NotificationseekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationseekerComponent]
    });
    fixture = TestBed.createComponent(NotificationseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
