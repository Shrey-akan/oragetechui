import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindjobsempComponent } from './findjobsemp.component';

describe('FindjobsempComponent', () => {
  let component: FindjobsempComponent;
  let fixture: ComponentFixture<FindjobsempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindjobsempComponent]
    });
    fixture = TestBed.createComponent(FindjobsempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
