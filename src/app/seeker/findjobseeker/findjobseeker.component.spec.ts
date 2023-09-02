import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindjobseekerComponent } from './findjobseeker.component';

describe('FindjobseekerComponent', () => {
  let component: FindjobseekerComponent;
  let fixture: ComponentFixture<FindjobseekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindjobseekerComponent]
    });
    fixture = TestBed.createComponent(FindjobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
