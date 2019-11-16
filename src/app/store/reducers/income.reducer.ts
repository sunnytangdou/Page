import { Action } from '@ngrx/store';
import { ListActionTypes } from '../actions';

export interface ListAction extends Action {
  payload: any;
}

export interface ListState {
  allDatas: Array<any>;
}

const initState: ListState = {
  allDatas: []
};

export function topListStore(state: ListState = initState, action: ListAction): ListState {
  switch (action.type) {
    case ListActionTypes.LoadData:
      return state;
    case ListActionTypes.LoadSuccess:
      state.allDatas = action.payload.allDatas;
      return state;
    case ListActionTypes.ChangeData:
      state.allDatas = action.payload.allDatas;
      return state;
    default:
      return state;
  }
}
