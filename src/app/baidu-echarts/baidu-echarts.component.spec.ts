import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiduEchartsComponent } from './baidu-echarts.component';

describe('BaiduEchartsComponent', () => {
  let component: BaiduEchartsComponent;
  let fixture: ComponentFixture<BaiduEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiduEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiduEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
