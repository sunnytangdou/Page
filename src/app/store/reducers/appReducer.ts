import { SHOW_DAYDATA, ACTION_LOGIN } from '../actions/appActions';

// export interface AppReducerState {
//   login: boolean;
//   user?: string;
// }

// const initialState: AppReducerState = {
//   login: false

// };
// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case ACTION_LOGOUT:
//       return {
//         ...state,
//         login: false,
//         user: null
//       };

//     case ACTION_LOGIN:
//       return {
//         ...state,
//         login: true,
//         user: action.payload.user
//       };
//   }
//   return state;
// }
// export interface DayDatas {
//   // Array<Object>
//   consume: [{
//     custumeDate: String,
//     datas: [{
//       icon: String,
//       companyName: String,
//       category: String,
//       consumption: String,
//       time: String,
//       account: false,
//       amount: String
//     }]
//   }];
// }
export const allDatas = [{
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
}];

