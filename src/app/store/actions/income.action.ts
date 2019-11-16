import { Action } from '@ngrx/store';

export enum ListActionTypes {
    LoadData = 'Load Data',
    ChangeData = 'Change Data'
}

export class LoadListData implements Action {
    readonly type = ListActionTypes.LoadData;
}

export class ChangeListData implements Action {
    readonly type = ListActionTypes.ChangeData;
    constructor(public payload: { key: string; value: any }) { }
}
