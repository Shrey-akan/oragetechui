import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInCheckempComponent } from './sign-in-checkemp.component';

describe('SignInCheckempComponent', () => {
  let component: SignInCheckempComponent;
  let fixture: ComponentFixture<SignInCheckempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInCheckempComponent]
    });
    fixture = TestBed.createComponent(SignInCheckempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
