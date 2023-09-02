import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjobsuserComponent } from './myjobsuser.component';

describe('MyjobsuserComponent', () => {
  let component: MyjobsuserComponent;
  let fixture: ComponentFixture<MyjobsuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyjobsuserComponent]
    });
    fixture = TestBed.createComponent(MyjobsuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
