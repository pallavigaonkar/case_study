import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, throwError } from "rxjs";


interface LoginResponseData {
    id: string;
    username: string;
    role: string;
}

@Injectable({providedIn: 'root'})
export class LoginService{
    constructor(private http: HttpClient){}
    login(username: string, password: string){
        return this.http.post<any>(
            'assets/data/login.json',
            {
                username: username,
                password: password
            }
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
}

