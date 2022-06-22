// console.log("hallo i'm vmax martists");

// console.log('haloo: ', vmax);
// console.log('tsst');


// let employee: object;

// employee = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     jobTitle: 'Web Developer'
// };
let employees: {
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
console.log(employees, 'mentor : ', vmax);

let exArray0 = [1, 2, 3];
let exArray11 = [1, 2, 3];

console.log(exArray.length); // 3 độ dài mảng
console.log(exArray.concat(exArray1)); //nối mảng
//MAP
let series1 = [1, 2, 3];
let doubleIt1 = series.map(function (item) {
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

//slice trích mảng đã cho thành mảng con theo vị trí mình muốn không lấy phần tử cuối
var numbers = [1, 2, 3, 4, 5, 10];
var child = numbers.slice(0, 3);
console.log(child); // 1 2 3 , -1 là phần tử cuối ở dây là 10

// join()  nối các phần tử của mảng thành một string.
var numbers = [1, 2, 3, 4, 5, 10];
var exArray2 = ["110" ,"110" ,"110" ,"110" ,"110" ,"110" ];

var mount = exArray2.join();
console.log(mount);

var key = numbers.keys();


var exArray2 = ["1" ,"2","3","4" ,"5" ,"6" ,"7" ,"8"];
console.log(exArray2.length);
 
exArray2.length = 5;
console.log(fruits); 




function add(a: number, b: number): any {
    return a + b;
}
console.log(add);

//// thay thế SPLICE

// Thay thế 1 phần tử tính từ index 2 bằng các phần tử "Lemon", "Kiwi"
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");//THAY THẾ PHẦN TỬ THỨ 2 BẰNG 2 PHÀN TỬ
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"];

// Do các tham số item1,... itemX là không bắt buộc
// Nên chúng ta có thể sử dụng phương thức này để xóa hàng loạt các phần tử trong mảng, xet ví dụ dưới đây
// Xóa 2 phần tử mảng kể từ index 2
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2); // THAY THẾ PHẦN TỬ THỨ 2 2 LẦN
console.log(fruits); // ["Banana", "Orange"]



