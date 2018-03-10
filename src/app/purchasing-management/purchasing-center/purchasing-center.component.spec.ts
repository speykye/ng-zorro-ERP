import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingCenterComponent } from './purchasing-center.component';

describe('PurchasingCenterComponent', () => {
  let component: PurchasingCenterComponent;
  let fixture: ComponentFixture<PurchasingCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
