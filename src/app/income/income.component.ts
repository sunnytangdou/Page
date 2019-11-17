import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  public dateList = ['2019年08月', '2019年09月', '2019年10月', '2019年11月', '2019年12月'];
  public selectedDate = this.dateList.length ? this.dateList[0] : '1970年01月';
  public accountList = ['全部账户', '账户A', '账户B'];
  public selectedAccount = this.accountList.length ? this.accountList[0] : '全部账户';
  constructor() {
  }

  ngOnInit() {
  }

  dateChange(date) {
    console.log(date);
    // TODO Set selectValue to redux.
  }

  accountChange(account) {
    console.log(account);
    // TODO Set selectValue to redux.
  }

}
