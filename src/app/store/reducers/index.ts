import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { topListStore, ListState } from './income.reducer';

export interface State {
    topListStore: ListState;
}

export const reducers: ActionReducerMap<State> = {
    topListStore,
};
