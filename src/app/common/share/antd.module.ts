import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    exports: [
        FormsModule,
        CommonModule,
        NgZorroAntdModule
    ]
})
export class AntdModule {

}
