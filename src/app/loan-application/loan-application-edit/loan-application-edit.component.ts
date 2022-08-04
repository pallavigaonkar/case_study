import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoanApplication } from '../loan-application.model';
import { LoanApplicationService } from '../loan-application.service';

@Component({
  selector: 'app-loan-application-edit',
  templateUrl: './loan-application-edit.component.html',
  styleUrls: ['./loan-application-edit.component.css']
})
export class LoanApplicationEditComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private loanAppService: LoanApplicationService) { }
  @ViewChild('f', { static: false }) editForm: NgForm;
  subscription: Subscription;
  editedItem: LoanApplication;
  editMode = false;
  loanApp: LoanApplication;

  ngOnInit(): void {
    console.log('hi');
    this.editMode = this.loanAppService.getEditMode();
    if(this.editMode){
      this.editedItem = this.loanAppService.getLoanApp();
      setTimeout(() => {
        this.editForm.setValue({
          firstName: this.editedItem.firstName,
          lastName: this.editedItem.lastName,
          loanNumber: this.editedItem.loanNumber,
          propertyAddress: this.editedItem.propertyAddress,
          loanAmount: this.editedItem.loanAmount,
          loanType: this.editedItem.loanType,
          loanTerm: this.editedItem.loanTerm,
        })
        this.editForm.controls['firstName'].disable();
        this.editForm.controls['lastName'].disable();
        this.editForm.controls['loanNumber'].disable();
        this.editForm.controls['propertyAddress'].disable();
          console.log(this.editedItem);
      }, 0);
    }
  }

  onSave(form: NgForm){
    console.log()
    this.loanApp = form.value;
    if(this.editMode){
      this.loanAppService.create(this.loanApp).subscribe(
        resData=>{
          console.log(resData);
          this.router.navigate(['loan-application']);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.loanAppService.update(this.loanApp).subscribe(
        resData=>{
          console.log(resData);
          this.router.navigate(['loan-application']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  onCancel() {
    this.loanAppService.setEditMode(false);
    this.editForm.reset();
    this.router.navigate(['loan-application']);
  }

  ngOnDestroy(): void {
    this.loanAppService.setEditMode(false);
    this.editForm.reset();
  }
}
