import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  activeIncome: Boolean = false;
  menus: any = [{
    title: '收支分析',
    icon: './assets/icons/jibenzhexiantu.svg',
    iconActive: './assets/icons/jibenzhexiantuactive.svg',
    active: false
  }, {
    title: '月度账单',
    icon: './assets/icons/dingdandingdanmingxishouzhimingxi-xianxing.svg',
    iconActive: './assets/icons/dingdandingdanmingxishouzhimingxi-xianxingactive.svg',
    active: false
  }, {
    title: '我的账本',
    icon: './assets/icons/shouzhimingxicaifuhongbaoyue.svg',
    iconActive: './assets/icons/shouzhimingxicaifuhongbaoyueactive.svg',
    active: false
  }, {
    title: '查找交易',
    icon: './assets/icons/chazhao.svg',
    iconActive: './assets/icons/chazhaoactive.svg',
    active: false
  }];
  constructor() { }

  ngOnInit() {
  }
  goIncome(item) {
    this.menus.map(function(o) {
      o.active = false;
    });
    item.active = true;
  }
}
