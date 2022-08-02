import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoanApplicationEditComponent } from "./loan-application/loan-application-edit/loan-application-edit.component";
import { LoanApplicationComponent } from "./loan-application/loan-application.component";

const appRoutes: Routes = [
    {path: 'loan-application', component: LoanApplicationComponent, children:[
        {path: 'loan-application-edit', component:LoanApplicationEditComponent}
    ]}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}