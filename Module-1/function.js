// ****************************1. syntax

// normal function
function add(num1, num2) {
  return num1 + num2;
}
const ans1 = add(5, 10);
// console.log(ans1); 15

// arrow function with return keyword
const addFunc = (num1, num2) => {
  return num1 + num2;
};
const ans2 = addFunc(5, 11);
// console.log(ans2); 16

// arrow function without return keyword, one liner
const addFunc2 = (num1, num2) => num1 + num2;
const ans3 = addFunc2(4, 6);
// console.log(ans3); 10

/*
 *****************2. function declaration: jkhn kono function k kono variable er moddhe store kra hoy na
 */
function add(num1, num2) {
  return num1 + num2;
}
/*
function expression: jkhn kono function amra akta variable er moddhe store kre rakhi
arrow function by default function expression. krn variable e store krte hoy syntactically.
*/
const addFunc3 = (num1, num2) => num1 + num2;
const multiply = function (num1, num2) {
  return num1 * num2;
};
// console.log(multiply(5,6));

// **********************3. this

const user = {
  age: 45,
  getAge: function () {
    console.log("getAge :", this.age);
    // normal function er this keyword parent object e access krte pare
  },
  getAgeDetails: () => {
    console.log("getAgeDetails :", this.age);
    // arrow function er this keyword parent object e access krte pare na
  },
};

// const result1 = user.getAge();
// const result2 = user.getAgeDetails();

// **********************4.access before declaring
let result = add(2, 3);
// we can access a normal function before declaring
// but we can not access an arrow function/ function expression before initialisation
console.log(result);
function add(num1, num2) {
  return num1 + num2;
}
