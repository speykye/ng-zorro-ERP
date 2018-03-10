import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingSettingComponent } from './purchasing-setting.component';

describe('PurchasingSettingComponent', () => {
  let component: PurchasingSettingComponent;
  let fixture: ComponentFixture<PurchasingSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
