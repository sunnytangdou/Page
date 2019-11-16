import { AppComponent } from './app.component';
import { TitleComponent } from './common/components/title/title.component';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CustomPreloadingStrategy } from './config/custom.preloading.strategy';

import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, {
    provide: LocationStrategy, useClass: HashLocationStrategy
  }, CustomPreloadingStrategy]
})
export class AppModule { }
