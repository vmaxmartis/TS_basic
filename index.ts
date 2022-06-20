// console.log("hallo i'm vmax martists");
const vmax: string = 'Vmax Martis';
// console.log('haloo: ', vmax);
// console.log('tsst');

let count = 9;
// let employee: object;

// employee = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     jobTitle: 'Web Developer'
// };
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};
console.log(employee, 'mentor : ', vmax);

let exArray = [1, 2, 3];
let exArray1 = [1, 2, 3];

console.log(exArray.length); // 3 độ dài mảng
console.log(exArray.concat(exArray1)); //nối mảng
//MAP
let series = [1, 2, 3];
let doubleIt = series.map(function (item) {
  return item - 1;
});
console.log(doubleIt);

var numbers = [2, 4, 6, 8];

var doubleNumbers = numbers.map(function (num) {
  return num;
});

console.log(doubleNumbers); //  [4, 8, 12, 16]

//POP XÓA PHẦN TỬ CUỐI MẢNH
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
var item = fruits.pop();

//PUSH THÊM VÀO CUỐI MẢNG
console.log(item); // Mango

console.log(fruits);
var length = fruits.push('Kiwi');
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
//reduce duyệt từ trái qua phải
var numbers = [1, 2, 3, 4, 5, 10];

var sum = numbers.reduce(function (total, number) {
  return total + number;
}, 0);
console.log(sum);

//reduce duyệt từ phải qua trái
var numbers = [1, 2, 3, 4, 5, 10];
var sumR = numbers.reduceRight(function (total, number) {
  return total - number;
}, 0);
console.log(sumR);

//reverse đảo ngược vị trí các phần tử
var numbers = [1, 2, 3, 4, 5, 10];
numbers.reverse();
console.log(numbers);

//slice trích mảng đã cho thành mảng con cardo vị trí mình muốn không lấy phần tử cuối
var numbers = [1, 2, 3, 4, 5, 10];
var child = numbers.slice(0, 3);
console.log(child); // 1 2 3 , -1 là phần tử cuối ở dây là 10

// join()  nối các phần tử của mảng thành một string.
var numbers = [1, 2, 3, 4, 5, 10];
var exArray2 = ['110', '110', '110', '110', '110', '110'];

var mount = exArray2.join();
console.log(mount);

var key = numbers.keys();

var exArray2 = ['1', '2', '3', '4', '5', '6', '7', '8'];
console.log(exArray2.length);

exArray2.length = 5;
console.log(fruits);

function addarray(a: number, b: number): any {
  return a + b;
}
console.log(addarray);

//// thay thế SPLICE

// Thay thế 1 phần tử tính từ index 2 bằng các phần tử "Lemon", "Kiwi"
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 1, 'Lemon', 'Kiwi'); //THAY THẾ PHẦN TỬ THỨ 2 BẰNG 2 PHÀN TỬ
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"];

// Do các tham số item1,... itemX là không bắt buộc
// Nên chúng ta có thể sử dụng phương thức này để xóa hàng loạt các phần tử trong mảng, xet ví dụ dưới đây
// Xóa 2 phần tử mảng kể từ index 2
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 2); // THAY THẾ PHẦN TỬ THỨ 2 2 LẦN
console.log(fruits); // ["Banana", "Orange"]

const input: number | string = Math.random() * 100;
console.log(input.toFixed(0)); //

//Tuples
//khai báo Tuples
var Tuples: [string, number, boolean, number][];
Tuples = [
  ['Name', 21, true, 2],
  ['Vmax', 22, true, 2],
]; //arrays of tuples
console.log(
  Tuples.push(
    ['Thoai', 21, true, 2], ['Thoai', 21, true, 2], ['Nking', 21, true, 2]

  )
);
console.log(Tuples[4]);
var thoai: [string, number, boolean, number][] = [
  ['Banana', 21, true, 2],
  Tuples[1],
  Tuples[0],
  Tuples[2],
  Tuples[3],
];
console.log(thoai);
var test2: [string, number] = ['Banana', 18];

//ENUM : k định nghĩa data từ server gửi về 


enum PrintMedia {
  Newspaper = 'thoại',
  Newsletter = '1',
  Magazine = 'string',
  Book = 1
}
//enum dạng munber
console.log(PrintMedia[1]); //Book
console.log(PrintMedia['Book']); //1


console.log('magazine', PrintMedia);
enum State {
  Active = 'ACTIVE',
  Deactivate = 1,
  Pending
}

// object TYPE
let info: object = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
};

let pickme: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
};
console.log(pickme.firstName);


// object destructuring
interface infox {
  firstName: string,
  lastName: string,
  age: number,
  jobTitle: string
};


interface KeyValueProcessor {
  (key: number, value: string): void;
};

function addKeyValue(key: number, value: string): void {
  console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value: string): void {
  console.log('updateKeyValue: key = ' + key + ', value = ' + value)
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

kvp = updateKeyValue;
kvp(1, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 



interface Iob {
  id: number;
  username: string;
  address: string;
  phonenumber: string;
  age: number;
}

const company: Iob = {
  id: 1,
  username: 'Vmax',
  address: 'tovantien',
  phonenumber: '132',
  age: 20

};

//trích lấy thuộc tính object
const { username, address, phonenumber, age } = company;
const { id, ...rest } = company; /// rest operations gôm các thuộc tính vào 1 biến mới

//  clone object ra 1 object mới
const company1: object = {
  ...company,
  point: 1
}
console.log(company1);

//arrays destructuring trích tách mảng
const traicay = ['Banana', 'Lemon', 'Orange', 'Green']
const loaitraicay = traicay.splice(0, 3);
console.log('mảng trái cây lấy ra', loaitraicay);

//cách chiết tách cũ
const fruits1 = loaitraicay[0]
console.log('trái cây lấy ra', fruits1);

var traicay2 = ['Banana', 'Lemon', 'Orange', 'Green']
const [fruits2, fruit3] = traicay2;
console.log(fruits2, fruit3);
const [fruits4, ...fruitsx] = traicay2;
console.log('tách mảng trái cây ', fruitsx);


//clone arrays và tạo arrays mới
const traicaymoi = [...traicay2, 'watermelon', 'coconut']
console.log(traicaymoi);

interface studen {
  id: number,
  username: string,
  address: string,
  phonenumber: string,
  age: number
}



const sinhvien2: studen[] = [

  {
    id: 11,
    username: 'Vmax11',
    address: 'tovantien',
    phonenumber: '132',
    age: 20
  },
  {
    id: 12,
    username: 'Vmax22',
    address: 'tovantien',
    phonenumber: '132',
    age: 20
  }

]
const listSV = [...sinhvien2, {
  id: 3,
  username: 'Vmax33',
  address: 'tovantien131',
  phonenumber: '1321312',
  age: 20123
}]
console.log('listSV mới clone ra', listSV);



type Student = {
  readonly id: number;
  name: string;
  age?: number; // optional
}
interface IStudent {
  readonly id: number;
  name: string;
  age?: number; // optional  trường age có thể có hoặc không
}

const studentB: IStudent = {
  id: 2,
  name: 'Bob',
  age: 18,
}
console.log(studentB);


type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;
interface Studentx {
  id: number | string;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
}
const Qnusv: Studentx[] = [{
  id: 1,
  name: 'thoại',
  gender: 'male',
  grade: 'A'
}, {
  id: 'id_master',
  name: 'thoại',
  gender: 'male',
  grade: 'A'
}]
const listSVqnu = [...Qnusv, {
  id: 1,
  name: 'thoại',
  gender: 'male',
  grade: 'A'
}]
console.log(listSVqnu);


interface info {
  name: string;
  credit: number;
}
interface card {
  id: number;
  namecard: string;
}
interface contact {
  email: string;
  phone: string;
}
type NV = card & info;
type User = info & card;

interface infoNV extends card, info { };
interface infoUser extends contact, info { }



//Hàm trong TS

function echo(message: string): void {
  console.log(message.codePointAt(1));
}
console.log(echo("vmax"));

class Person {
  //thuộc tính
  ssn!: number;
  firstName!: string | number;
  lastName!: any;
  //3 biến ở ngoài gọi vào 
  //k có hàm tạo k có tham số 
  //   constructor(firstName: string, lastName:  string ){
  // this.lastName=lastName;
  // this.firstName = firstName

  //   };// bắt buộc phải có
  findAll(name: string, last: string): any {
    this.lastName = name;
    this.firstName = last;
  }
} //k bắt buộc
//gọi class ra 
//1 object mới từ Person
const Person1 = new Person();
Person1.findAll("Quy", "Deptrai");
console.log(Person1)


class PersonX {
  ssn;
  firstName;
  lastName;
  constructor(ssn: any, firstName: any, lastName: any) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;

  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Employee extends PersonX {
  address: string
  constructor(ssn: any, firstName: any, lastName: any, address: any) {
    super(ssn, firstName, lastName)
    this.address = address

  }
  getInfo() {
    return `${this.firstName} `;
  }
}
const inFo = new Employee(1, 'Thoai', 'Dinh', "55 ngô mây")
console.log(inFo);

//function in typeScript

let hello = function () {
  console.log("Hello TypeScript!");
};
hello();
function Sum(x: number, y: number): any {
  return x + y;
}
console.log(Sum(2, 3));


//function không tên
let add = function (x: number, y: number): number {
  return x + y;
}
console.log(add(2, 3));


//function cho phép k truyền tham số 
function fnName(_x: any, y: 'male' | 'female', z?: number): any {
  {
    return console.log(y);
  }
}
fnName(3, 'male')
// function được gán vào biến
let fnName2 = function (x: any, y: any): any { return console.log(y); }
fnName2(3, 'male')

// Function Arrow được sử dụng cho anonymous function (afn)

const arrowFn = (x: any, y: any): any => {
  return x;
}
console.log(arrowFn(3, 'male'))

// Casting 
let x: unknown = 'Vmax Martis';
console.log((x as string).length);

let y: unknown = 43;
console.log((y as string).length);

let z: unknown = 'hello';
console.log((<string>z).length);

// Generic : nó là 1 kiểu dữ liệu nhưng mà n nhận vào đc tham số luôn
interface UserCase {
  id: number;
  name: string;
}
const numberList: Array<number> = [1, 2, 3];
const wordList: Array<string> = ['easy', 'frontend'];


const studentList: Array<UserCase> = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]
interface List<T> {
  [index: number]: T | string; //truy xuất theo kiểu mà T(tham số truyền vào)
  length: number;
}
const ListGeneric: List<number> = [1, 2, 3, "thoại"]

console.log(ListGeneric[2]);
console.log(ListGeneric.length + 1);

//keyof  : danh sách các key của 1 kiểu dữ liệu ở đây là 1 interface
interface Studentv {
  id: number;
  name: string;
  address: any
}
type ListKey = keyof Studentv;
const keys: ListKey = 'address'
console.log(keys);
// typeof ấy kiểu dữ liệu
console.log(typeof 'easy frontend'); // 'string'
console.log(typeof 123); // 'number'
console.log(typeof false); // 'boolean'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function () { }); // 'function'
console.log(typeof window !== 'undefined'); // true on client, false on


interface Student2 {
  id: number;
  name: string;
  }
  type MappedTypes = {
  [Key in keyof Student2]: boolean;
  };
   //Utilyti 