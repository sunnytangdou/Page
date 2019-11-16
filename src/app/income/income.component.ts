import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  public listOfOption = ['2019年08月', '2019年09月', '2019年10月', '2019年11月', '2019年12月'];
  public selectedValue = this.listOfOption.length ? this.listOfOption[0] : '1970年01月';
  constructor() {
  }

  ngOnInit() {
  }

  timeChange(time) {
    console.log(time);
    // TODO Set selectValue to redux.
  }

}
