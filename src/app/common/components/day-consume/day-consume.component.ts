import { Component, OnInit } from '@angular/core';
import { allDatas } from '../../../store/reducers/appReducer';
// import { Store } from '@ngrx/store';


@Component({
  selector: 'app-day-consume',
  templateUrl: './day-consume.component.html',
  styleUrls: ['./day-consume.component.css']
})
export class DayConsumeComponent implements OnInit {
  datas: Array<Object> = [];
  constructor() { }

  ngOnInit() {
    this.datas = allDatas;
  }
}

