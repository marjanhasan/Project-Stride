// forEach, map, find, filter, reducer

const numbers = [10, 20, 30, 40, 50];
// numbers.forEach((item) => console.log(item));
// numbers.map((item) => console.log(item));
// output same of above line
// but

const num1 = numbers.forEach((item) => item); // can not return anything
// console.log("num1 :", num1);
const num2 = numbers.map((item) => item + 1); // can return new array element
// console.log("num2 :", num2);

const findValue = numbers.find((item)=> item == 20); 
// console.log(findValue);
// is used for find an element in an array
// if an element is found then it will return that particular element otherwise output will be undefined

const filterValue = numbers.filter((item) => item >= 35);
// console.log(filterValue);
// return an updated array from filtered array if condition satisfied

const reducedValue = numbers.reduce((curVal,prevVal)=> curVal+prevVal,10);
console.log(reducedValue);