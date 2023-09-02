import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageseekerComponent } from './messageseeker.component';

describe('MessageseekerComponent', () => {
  let component: MessageseekerComponent;
  let fixture: ComponentFixture<MessageseekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageseekerComponent]
    });
    fixture = TestBed.createComponent(MessageseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
