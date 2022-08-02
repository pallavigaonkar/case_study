import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  constructor(private loanAppService: LoanApplicationService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    
  }

  onSearch(){
    const loanNumber = this.loanNumberInputRef.nativeElement.value;
    this.loanAppService.fetchLoanApplications(loanNumber).subscribe(
      resData=>{
        console.log(resData);
        this.loanApplications = resData;
        console.log('applications==',this.loanApplications);
      },
      error => {
        console.log(error);
      }
    );
  }

  onAdd(){
    this.router.navigate(['loan-application-edit'], {relativeTo:this.activatedRoute});
  }
}
