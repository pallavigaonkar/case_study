import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanApplication } from './loan-application.model';
import { LoanApplicationService } from './loan-application.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {
  loanApplications: LoanApplication[];
  @ViewChild('loanNumberInput') loanNumberInputRef: ElementRef;
  loanApp: LoanApplication;
  constructor(private loanAppService: LoanApplicationService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    
  }

  onSearch(){
    const loanNumber = this.loanNumberInputRef.nativeElement.value;
    this.loanAppService.fetch(loanNumber).subscribe(
      resData=>{
        this.loanApplications = resData;
      },
      error => {
        console.log(error);
      }
    );
  }

  editLoanApplication(loanApp: LoanApplication){
    console.log(loanApp);
    this.loanAppService.setEditMode(true);
    this.loanAppService.setLoanApp(loanApp);
    this.router.navigate(['loan-application/edit']);
  }

  onAdd() {
    this.router.navigate(['loan-application/new']);
    this.loanAppService.setEditMode(false);
  }

  deleteLoanApplication(id: number) {
    this.loanAppService.delete(id).subscribe(
      resData=>{
        console.log(resData);
        this.loanAppService.fetch().subscribe(
          resData=>{
            this.loanApplications = resData;
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }

}
