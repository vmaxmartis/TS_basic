//Explicit types
let count: number = 123;
let studentName: string = 'Alice';
let isActive: boolean = true;
const numberList: number[] = [1, 2, 3];



//Infered types


let counts = 123;
let address = '55 Ngô Mây'

class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}