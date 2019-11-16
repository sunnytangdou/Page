import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TopListActionTypes, LoadTopListError } from '../actions';
import { TopListService } from '../../common/services';


@Injectable()
export class TopListEffects {

  @Effect()
  loadListData$ = this.actions$
    .pipe(
      ofType(TopListActionTypes.LoadData),
      mergeMap(() => this.topListService.topList()
          .pipe(
            map(data => ({ type: '[TopList API] Data Loaded Success', payload: data })),
            catchError((err) => {
              return of(new LoadTopListError(err['message']));
            })
          ))
    );

  constructor(
    private actions$: Actions,
    private topListService: TopListService
  ) { }
}
