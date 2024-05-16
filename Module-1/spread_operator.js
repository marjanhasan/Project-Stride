// problem

let a = [10, 20, 30];
let b = a;

b.push(100);
console.log(a); // [ 10, 20, 30, 100 ]
console.log(b); // [ 10, 20, 30, 100 ]

// solution

let c = [10, 20, 30];
let d = [...c];

d.push(100);
console.log(c); // [ 10, 20, 30 ]
console.log(d); // [ 10, 20, 30, 100 ]

// rest operator

const nums = [10, 20, 30, 40];

// const [num1,num2,num3] = nums; // 10 20 30
const [num1, num2, ...num3] = nums; // 10 20 30
console.log(num1, num2, num3); // 10 20 [ 30, 40]
let num4 = nums[3]; // 40
console.log(num4);

// object

const user1 = {
  name: "Rahim",
  age: 45,
  address: "Dhaka",
};

const user2 = { ...user1 };

user1.isMarried = true;
user2.isMarried = false;
console.log(user1);
console.log(user2);

const { age, ...data } = user1;
console.log(age);
console.log(data);
