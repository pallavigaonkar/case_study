import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoanApplicationEditComponent } from "./loan-application/loan-application-edit/loan-application-edit.component";
import { LoanApplicationComponent } from "./loan-application/loan-application.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'loan-application', component: LoanApplicationComponent},
    {path: 'loan-application/edit', component:LoanApplicationEditComponent},
    {path: 'loan-application/new', component:LoanApplicationEditComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}