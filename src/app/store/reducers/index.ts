import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { topListStore, TopListState } from './income.reducer';

export interface State {
    topListStore: TopListState;
}

export const reducers: ActionReducerMap<State> = {
    topListStore,
};
