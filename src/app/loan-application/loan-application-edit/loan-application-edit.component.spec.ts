import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationEditComponent } from './loan-application-edit.component';

describe('LoanApplicationEditComponent', () => {
  let component: LoanApplicationEditComponent;
  let fixture: ComponentFixture<LoanApplicationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApplicationEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanApplicationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
