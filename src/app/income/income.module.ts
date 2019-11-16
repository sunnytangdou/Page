import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { IncomeRoutingModule } from './income-routing.module';

import { IncomeComponent } from './income.component';
// import { TitleComponent } from '../common/components/title/title.component';
import { MenuComponent } from '../common/components/menu/menu.component';
import { BaseInfoComponent } from '../common/components/base-info/base-info.component';
import { DayConsumeComponent } from '../common/components/day-consume/day-consume.component';

@NgModule({
  declarations: [IncomeComponent, MenuComponent, BaseInfoComponent, DayConsumeComponent],
  imports: [
    FormsModule,
    CommonModule,
    NzSelectModule,
    IncomeRoutingModule
  ]
})
export class IncomeModule { }
