import { Action } from '@ngrx/store';

export enum ListActionTypes {
    LoadData = 'Load Data',
    LoadSuccess = 'Loaded Success',
    ChangeData = 'Change Data'
}

export class LoadListData implements Action {
    readonly type = ListActionTypes.LoadData;
}

export class LoadTopListSuccess implements Action {
    readonly type = ListActionTypes.LoadSuccess;
}

export class ChangeListData implements Action {
    readonly type = ListActionTypes.ChangeData;
    constructor(public payload: { key: string; value: any }) { }
}
