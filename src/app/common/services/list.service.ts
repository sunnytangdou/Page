import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public mockData = {
    allDatas: [{
      custumeDate: '今天',
      datas: [{
        icon: './assets/icons/beizi.svg',
        companyName: '支付宝-瑞幸咖啡（北京）有限公司',
        category: '零食烟酒',
        consumption: '信用卡7865',
        time: '09:34:67',
        account: false,
        amount: '23.98'
      }]
    }, {
      custumeDate: '昨天',
      datas: [{
        icon: './assets/icons/beizi.svg',
        companyName: '支付宝-瑞幸咖啡（北京）有限公司',
        category: '零食烟酒',
        consumption: '信用卡7865',
        time: '09:34:67',
        account: false,
        amount: '23.98'
      }, {
        icon: './assets/icons/beizi.svg',
        companyName: '支付宝-瑞幸咖啡(北京）有限公司',
        category: '零食烟酒',
        consumption: '信用卡7865',
        time: '09:34:67',
        account: true,
        amount: '23.98'
      }]
    }]
  };

  constructor(private http: HttpClient) {
  }
  getListData() {
    return new Observable(observer => {
      // TODO mock data
      observer.next(this.mockData);
    });
  }
}
