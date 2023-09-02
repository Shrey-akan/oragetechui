import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaderseekerComponent } from './haderseeker.component';

describe('HaderseekerComponent', () => {
  let component: HaderseekerComponent;
  let fixture: ComponentFixture<HaderseekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaderseekerComponent]
    });
    fixture = TestBed.createComponent(HaderseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
