/* 
Datatypes:
Primitive: String, Number, Boolean, Null, Undefined
Non-Primitive: Reference Variables(Array, Object, Function)
*/
let a = 5;
let b = a;
b = 6;

// console.log('a :',a);
// console.log('b :',b);

const nums1 = [1, 2, 3];
const nums2 = nums1;

nums2.push(4);

console.log("nums1 :", nums1);
console.log("nums2 :", nums2);
