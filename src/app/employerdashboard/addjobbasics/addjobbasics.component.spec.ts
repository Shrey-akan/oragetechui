import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobbasicsComponent } from './addjobbasics.component';

describe('AddjobbasicsComponent', () => {
  let component: AddjobbasicsComponent;
  let fixture: ComponentFixture<AddjobbasicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddjobbasicsComponent]
    });
    fixture = TestBed.createComponent(AddjobbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
