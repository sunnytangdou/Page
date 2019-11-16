import { Action } from '@ngrx/store';
import { ListActionTypes } from '../actions';

export interface ListAction extends Action {
  payload: any;
}

export interface ListState {
  allDatas: Array<any>;
}

const initState: ListState = {
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
      companyName: '支付宝-瑞幸咖啡（北京）有限公司',
      category: '零食烟酒',
      consumption: '信用卡7865',
      time: '09:34:67',
      account: true,
      amount: '23.98'
    }]
  }]
};

export function topListStore(state: ListState = initState, action: ListAction): ListState {
  switch (action.type) {
    case ListActionTypes.LoadData:
      return state;
    case ListActionTypes.ChangeData:
      // TODO Change data
      return state;
    default:
      return state;
  }
}
