export class LoanApplication {
    public firstName: string;
    public lastName: string;
    public loanNumber: string;
    public propertyAddress: string;

    constructor(firstName: string, lastName: string, loanNumber: string, propertyAddress: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.loanNumber = loanNumber;
        this.propertyAddress = propertyAddress;
    }
}