let num1 = 20, num2 = 20;
console.log(num1 > num2 ? "True":"False");

num1 > num2 ? console.log("NUMBER One is big") :
num2 > num1 ? console.log("NUMBER Two is big") :
console.log("Both are equal");

let score = 37;

switch (true) {
    case score >= 80:
        console.log("A+", score);
        break;
    case score >= 70:
        console.log("A", score);
        break;
    case score >= 60:
        console.log("B", score);
        break;
    case score >= 50:
        console.log("C", score);
        break;
    case score >= 40:
        console.log("D", score);
        break;
    case score >= 33:
        console.log("E", score);
        break;
    default:
        console.log("Fail", score);
        break;
}

let color = "Red";

switch(color){
    case "Red":
        console.log("R");
        break;
    case "Blue":
        console.log("B");
        break;
    case "Green":
        console.log("G");
        break;
    default:
        console.log("NO COLOR");
        break;
}