import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileseekerComponent } from './profileseeker.component';

describe('ProfileseekerComponent', () => {
  let component: ProfileseekerComponent;
  let fixture: ComponentFixture<ProfileseekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileseekerComponent]
    });
    fixture = TestBed.createComponent(ProfileseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
