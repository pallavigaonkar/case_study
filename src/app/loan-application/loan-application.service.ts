import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoanApplication } from "./loan-application.model";

@Injectable({providedIn:'root'})
export class LoanApplicationService{
    constructor(private http: HttpClient){}
    fetchLoanApplications(loanNumber: string){
        return this.http.get<LoanApplication[]>(
            'assets/data/loan_application.json',
            {
                params: new HttpParams().set('loanNumber',loanNumber)
            }
        );
    }
}