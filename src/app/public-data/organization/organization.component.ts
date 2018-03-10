import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  public btns: Object = [{
    name: '新增',
    icon: 'anticon-plus',
    fn: () => {
      this.router.navigate(['../organizationAdd'], { relativeTo: this.activedRoute });
    }
  }, {
    name: '修改',
    icon: 'anticon-edit',
    fn: () => {
      console.log(2);
    }
  }, {
    name: '查看',
    icon: 'anticon-eye-o',
    fn: () => {
      console.log(3);
    }
  }, {
    name: '删除',
    icon: 'anticon-delete',
    fn: () => {
      console.log(4);
    }
  }, {
    name: '禁用',
    icon: 'anticon-close-circle-o',
    fn: () => {
      console.log(5);
    }
  }, {
    name: '解禁',
    icon: 'anticon-check-circle-o',
    fn: () => {
      console.log(6);
    }
  }, {
    name: '客户',
    icon: 'anticon-user',
    fn: () => {
      console.log(7);
    }
  }, {
    name: '过滤',
    icon: 'anticon-filter',
    fn: () => {
      console.log(8);
    }
  }, {
    name: '附件',
    icon: 'anticon-paper-clip',
    fn: () => {
      console.log(9);
    }
  }, {
    name: '页面',
    icon: 'anticon-file',
    fn: () => {
      console.log(10);
    }
  }, {
    name: '报表',
    icon: 'anticon-bar-chart',
    fn: () => {
      console.log(11);
    }
  }, {
    name: '刷新',
    icon: 'anticon-sync',
    fn: () => {
      this.ngOnInit();
    }
  }, {
    name: '退出',
    icon: 'anticon-logout',
    fn: () => {
      console.log(12);
    }
  }];

  constructor(private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
