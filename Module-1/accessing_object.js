const user = {
  name: "Karim",
  contact: {
    phone: "+880",
    email: "email@gmail.com",
  },
  pet: {
    name: "Pussy",
    info: {
      color: "White",
      weight: "1.5kg",
    },
  },
  familyMembers: [
    { name: "X", age: 54 },
    { name: "Y", age: 62 },
  ],
};

let userEmail = user.contact.email;
const {contact : {email}} = user;
console.log(email);
console.log(userEmail);
let petColor = user.pet.info.color;
const {pet : {info : {color}}} = user;
console.log(petColor);
console.log(color);

let x = user.familyMembers[0].name;
const {familyMembers : [mem1]} = user;
const {familyMembers : [{name}]} = user;
const {familyMembers : [{name: namx},{name: namy}]} = user;
console.log(mem1);
console.log(name);
console.log(namx);
console.log(namy);
console.log(x);
