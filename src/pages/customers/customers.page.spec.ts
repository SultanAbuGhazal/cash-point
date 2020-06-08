import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersPage } from './customers.page';

describe('CustomersPage', () => {
  let component: CustomersPage;
  let fixture: ComponentFixture<CustomersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
