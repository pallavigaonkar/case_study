import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { LoanApplication } from "./loan-application.model";

@Injectable({providedIn:'root'})
export class LoanApplicationService{
    private loanApp: LoanApplication;
    private editMode = false;
    constructor(private http: HttpClient){}

    fetch(loanNumber?: string){
        return this.http.get<LoanApplication[]>(
            'assets/data/loan_application.json',
            {
                params: new HttpParams().set('loanNumber',loanNumber)
            }
        ).pipe(
            catchError(this.handleError)
          );
    }

    create(loanApp: LoanApplication){
        return this.http.post<any>(
            'assets/data/login.json',
            loanApp
        ).pipe(
            catchError(this.handleError)
          );
    }

    update(loanApp: LoanApplication){
        return this.http.put<any>(
            'assets/data/login.json',
            loanApp
        ).pipe(
            catchError(this.handleError)
          );
    }

    delete(id: number){
        return this.http.delete<any>(
            'assets/data/',
            {
                params: new HttpParams().set('id',id)
            }
        ).pipe(
            catchError(this.handleError)
          );
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error occurred!';
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage)
        } else {
            errorMessage = errorRes.error.error.message;
        }
        return throwError(errorMessage);
    }

    getLoanApp(){
        return this.loanApp;
    }

    setLoanApp(loanApp: LoanApplication){
        this.loanApp = loanApp;
    }

    getEditMode(){
        return this.editMode;
    }

    setEditMode(editMode: boolean){
        this.editMode = editMode;
    }
}