import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-purchasing-setting',
  templateUrl: './purchasing-setting.component.html',
  styleUrls: ['./purchasing-setting.component.css']
})
export class PurchasingSettingComponent implements OnInit {
  public btns: Object = [{
    name: '引入',
    icon: 'anticon-download',
    fn: () => {
      alert('1');
    }
  }, {
    name: '删除',
    icon: 'anticon-delete'
  }, {
    name: '保存',
    icon: 'anticon-save'
  }, {
    name: '进销',
    icon: 'anticon-inbox'
  }, {
    name: '调整',
    icon: 'anticon-retweet'
  }, {
    name: '赋值',
    icon: 'anticon-code-o'
  }, {
    name: '过滤',
    icon: 'anticon-filter'
  }, {
    name: '全选',
    icon: 'anticon-check-square-o'
  }, {
    name: '全清',
    icon: 'anticon-switcher'
  }, {
    name: '报表',
    icon: 'anticon-bar-chart'
  }, {
    name: '页面',
    icon: 'anticon-file'
  }, {
    name: '刷新',
    icon: 'anticon-sync',
    fn: () => {
      this.ngOnInit();
    }
  }, {
    name: '退出',
    icon: 'anticon-logout'
  }];
  public ths: Array<any> = ['类型编号',
    '类别名称', '货号', '助记码', '品名',
    '规格', '产地', '单位', '采购员', '剂型',
    '存储条件', '冬储标志', '不使用标志',
    '不存货标志', '最大陈列量', '库存数量',
    '计划数量', '库存下限数量', '库存上限数量',
    '库存下限天数', '库存上限天数', '在途天数',
    '采购周期', '包装', '中包装', '批发价',
    '零售价', '实价', '进价', '采购底价',
    '总进货数量', '月均进货数量',
    '周均进货数量', '天均进货数量',
    '总销货数量', '月均销货数量',
    '周均销货数量', '天均销货数量',
    '45天店销', '30天店销', '天均店销',
    '新品标志', '商品属性', '考核分类属性',
    'ABC分类属性', '主推分类属性', '零售大类',
    '零售中类', '零售小类', '商品集群',
    '商品状态', '核心品种分类', '季节属性分类',
    '配送必备分类', '品牌属性', '供应商编号',
    '供应商', 'IsCOMParePrice'];
  public data = [];
  public loading = false;
  constructor(private location: Location) { }

  ngOnInit() {
    this.loading = true;
    for (let i = 0; i < 100; i++) {
      this.data.push({
        name: `${i}`,
        age: 32,
        address: `China`
      });
    }
    this.loading = false;
  }

}
