import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './modules/practice/practice.module#PracticeModule'
    },
    {
        path: 'practice',
        loadChildren: './modules/practice/practice.module#PracticeModule'
    },
    {
        path: 'customers',
        loadChildren: './modules/customers/customers.module#CustomersModule'
    },
    {
        path: 'users',
        loadChildren: './modules/users/users.module#UsersModule'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
