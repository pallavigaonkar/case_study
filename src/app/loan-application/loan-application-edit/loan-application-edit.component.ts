import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-application-edit',
  templateUrl: './loan-application-edit.component.html',
  styleUrls: ['./loan-application-edit.component.css']
})
export class LoanApplicationEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSave(form: NgForm){

  }

  onCancel() {
    this.router.navigate(['./loan-application']);
  }
}
