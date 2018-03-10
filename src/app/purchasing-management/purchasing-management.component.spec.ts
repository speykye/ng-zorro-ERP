import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingManagementComponent } from './purchasing-management.component';

describe('PurchasingManagementComponent', () => {
  let component: PurchasingManagementComponent;
  let fixture: ComponentFixture<PurchasingManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
