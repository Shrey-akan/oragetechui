import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcenteruserComponent } from './helpcenteruser.component';

describe('HelpcenteruserComponent', () => {
  let component: HelpcenteruserComponent;
  let fixture: ComponentFixture<HelpcenteruserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpcenteruserComponent]
    });
    fixture = TestBed.createComponent(HelpcenteruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
