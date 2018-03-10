import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  public searchForm: FormGroup;
  public isCollapsed = false;
  public userName: any;
  public search: any;
  public id: any;
  public jurisdiction: any;
  public isVisible = false;
  public navTabs: Array<any> = [];
  public navDatas: Array<any> = [];
  public supplyChains: Object = [{
    name: '采购管理',
    url: './purchasingManagement'
  }, {
    name: '销售管理',
    url: './salesManagement'
  }, {
    name: '仓库管理',
    url: ''
  }, {
    name: '核算管理',
    url: ''
  }, {
    name: 'GSP管理',
    url: ''
  }];

  public systemSettings: Object = [{
    name: '公共资料',
    url: './publicData'
  }, {
    name: '供应商资料',
    url: './publicData'
  }, {
    name: '客户资料',
    url: './publicData'
  }, {
    name: '商品资料',
    url: './publicData'
  }, {
    name: '职员资料',
    url: './publicData'
  }, {
    name: '价格资料',
    url: './publicData'
  }, {
    name: '集合设置',
    url: './publicData'
  }, {
    name: '条码秤规则',
    url: './publicData'
  }, {
    name: 'SCC资料',
    url: './publicData'
  }];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.searchForm = this.fb.group({
      search: ''
    });
  }

  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    this.isVisible = false;
    this.router.navigate(['../login']);
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }

  navChecked(name: string, url: string) {
    this.navTabs.push({

    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['userID'];
    this.userName = this.route.snapshot.params['name'];
    if (this.id == 1) {
      this.jurisdiction = '超级管理员';
      if (this.userName == '') {
        this.userName = 'admin';
      }
    } else if (this.id == 2) {
      this.jurisdiction = '普通管理员';
      if (this.userName == '') {
        this.userName = 'admin';
      }
    } else if (this.id == 0 || this.id == '' || this.id == undefined) {
      this.jurisdiction = '普通用户';
      if (this.userName == '') {
        this.userName = 'user';
      }
    }
  }

  ngOnDestroy() {

  }

}
