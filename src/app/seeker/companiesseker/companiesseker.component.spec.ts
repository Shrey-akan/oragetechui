import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniessekerComponent } from './companiesseker.component';

describe('CompaniessekerComponent', () => {
  let component: CompaniessekerComponent;
  let fixture: ComponentFixture<CompaniessekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniessekerComponent]
    });
    fixture = TestBed.createComponent(CompaniessekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
