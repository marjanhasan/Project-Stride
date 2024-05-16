/**
 * akta function jkhn arekta function er argument hisebe pass kra hoy
 * and then sei function e call kra hoy setai holo CALLBACK FUNCTION
 */
function show(name, age) {
  console.log("Hello", name, age);
}

function firstFunction(name, age, callBack) {
  console.log("Hello from firstFunction");
  setTimeout(() => {
    callBack(name, age);
  }, 3000);
}

firstFunction("Moon", 27, show);
