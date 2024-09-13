// 1. Create an array with the numbers 1 through 10. Write a function to remove all even
//  numbers from this array and return the new array.
//  Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  Output: [1, 3, 5, 7, 9]

// var input= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function evenremover(array){
//     for(var i=0; i<=array.length-1; i++){
//         if(array[i]%2==0){
//             array.splice(i,1);
//         }
//     }
//     return array;
// }
// console.log(evenremover(input));


// 2. Write a function that takes a string as an argument and returns the number of
// vowels in the string. Ignore case sensitivity.
// Input: "Hello World"
// Output: 3





// var str="Hello World";

// function vowels(string){
//     var count=0;
//     for(var i=0; i<=string.length-1; i++){
//         if(string[i]=="e"||string[i]=="o"){
//             count++;

//         }
//     }
//     return count;
// }
// console.log(vowels(str));

// Write a function that takes a month as an argument (e.g., "January") and returns
// the number of days in that month. Consider leap years for February. Use a switch
// statement.
// Input: "February"
// Output: 28 or 29 (depending on whether it's a leap year)


// var month= "February";
// switch (month){
//     case "January":
//         return "Not a leap year";
//         break;

//     case "May":
//         console.log("Not a leap year");
//         break;
            
//     case "February":
//         console.log("28 or 29 is a leap year");
//         break;

//         default:
//             console.log("Invalid")

// }


// 6. Write a function that takes three numbers and returns the largest of the three
// without using the Math.max() method.
// Input: 3, 5, 1
// Output: 5


// function dhavla(m,v,p){
//     if(m>v && m>p){
//         return m;

//     }
//     else if(v>m && v>p){
//         return v;
    

// }
//     else {
//         return p;
//     }

// }
// console.log(dhavla(3,5,1))


// Write a function that takes an array of numbers and returns the product of all the
// numbers in the array.
// Input: [1, 2, 3, 4]
// Output: 24

// var input= [1,2,3,4]
// function product(data){
//     var count=1;
//     for(var i=0; i<=data.length-1;i++){
//         count=count*data[i]
//     }
//     return count;

// }
// console.log(product(input))


// Write a function that takes a string and an optional character. The function should
// return the number of times the character appears in the string. If the character is
// not provided, count the number of spaces in the string.
// Input: ("Hello World", "o")
// Output: 2
// Input: ("Hello World")
// Output: 1


// var str="Hello World";
// var str1="o";
// function char(str,str1){
// var count=0;
// for(var i=0;i<=str.length-1;i++){
// if(str[i]==str1){
//     count++;

// }

// }
// return count;
// }
// console.log("O is repeating",char(str,str1))


// Write a function that takes a score (0-100) and returns the corresponding grade (A,
//     B, C, D, F) based on standard grading scale. Use a switch statement with a default
//     case for invalid scores.
//     Input: 85
//     Output: B

// function score(num){
// switch(true){
//     case (num>80 && num<=100):
//     console.log("B");
//     break;

//     default:
//         console.log("invalid")
// }
// }
// score(85)



