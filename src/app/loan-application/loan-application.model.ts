export class LoanApplication {
    public firstName: string;
    public lastName: string;
    public loanNumber: string;
    public propertyAddress: string;
    public id: number;
    public loanAmount: string;
    public loanType: string;
    public loanTerm: string;

    constructor(firstName: string, lastName: string, loanNumber: string, propertyAddress: string, id: number, loanAmount: string, loanType: string, loanTerm: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.loanNumber = loanNumber;
        this.propertyAddress = propertyAddress;
        this.id = id;
        this.loanAmount = loanAmount;
        this.loanType = loanType;
        this.loanTerm = loanTerm;
    }
}