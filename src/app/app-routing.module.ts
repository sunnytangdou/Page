import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingStrategy } from './config/custom.preloading.strategy';

const routes: Routes = [
    {
        path: 'login',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        data: { preload: true },
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'income',
        data: { preload: false },
        loadChildren: './income/income.module#IncomeModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, preloadingStrategy: CustomPreloadingStrategy })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
