var age = 18; // 17 // 20

if (age < 18) {
  console.log("You are not eligible for Driving license.");
} else if (age == 18) {
  console.log("You are eligible for Learning license.");
} else {
  console.log("You are eligible for Driving license.");
}

var student1 = 100;
var student2 = 50;
var student3 = 20;

console.log(student1 >= 50 && student2 >= 50 && student3 >= 50);

console.log(100 < 50 || 50 < 50 || 20 > 50);

if (student1 >= 50) {
console.log("Student1 Scored More Marks Than Student 2 and Student 3");
}

//switch

var userSelected = "You Have Selected a Laptop";

switch (userSelected) {
  case "Mobile":
    console.log("You Have Selected Mobile.");
    break;
  case "Watch":
    console.log("You Have Selected Watch.");
    break;
  case "Led TV":
    console.log("You Have Selected Led TV.");
    break;
  case "Laptop":
    console.log("You Have Selected Laptop.");
    break;
  default:
    console.log("Selected Accessories is not available.");
}