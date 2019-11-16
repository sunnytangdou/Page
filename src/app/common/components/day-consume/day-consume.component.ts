import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadListData, ChangeListData } from '../../../store';
import { ListState } from '../../../store/reducers/income.reducer';


@Component({
  selector: 'app-day-consume',
  templateUrl: './day-consume.component.html',
  styleUrls: ['./day-consume.component.css']
})
export class DayConsumeComponent implements OnInit {
  public topListStore$: Observable<ListState>;
  public datas: Array<Object> = [];
  constructor(private store: Store<{ topListStore: ListState }>) {
    this.topListStore$ = store.pipe(select('topListStore'));
  }

  ngOnInit() {
    this.store.dispatch(new LoadListData());
    this.topListStore$.subscribe((data: any) => {
      this.datas = data.allDatas;
    });
  }
}

