import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isActive: any = undefined;

  activeIncome: Boolean = false;
  menus: any = [{
    title: '收支分析',
    iconClass: 'icon-zhexiantu'
  }, {
    title: '月度账单',
    iconClass: 'icon-zhangdan'
  }, {
    title: '我的账本',
    iconClass: 'icon-zhangben'
  }, {
    title: '查找交易',
    iconClass: 'icon-chazhao'
  }];
  constructor() { }

  ngOnInit() {
  }

  activedItem(item) {
    this.isActive = item;
  }
}
