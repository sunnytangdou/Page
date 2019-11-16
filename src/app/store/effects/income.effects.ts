import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ListActionTypes } from '../actions';
import { ListService } from '../../common/services';


@Injectable()
export class TopListEffects {

  @Effect()
  $loadListData = this.actions$
    .pipe(
      ofType(ListActionTypes.LoadData),
      mergeMap(() => this.listService.getListData().pipe(
        map(data => ({ type: 'Loaded Success', payload: data })),
      ))
    );

  constructor(
    private actions$: Actions,
    private listService: ListService
  ) { }
}
