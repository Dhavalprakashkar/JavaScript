// 1. String

// console.log(typeof("yo"))

// 2.Number

// console.log(typeof(6))

// 3.Boolean

// console.log(typeof(true))

// 4.Undefined


// var username= "tr"
// var number=23
// var user;
// console.log(username,number)
// console.log(user,typeof(user))

// if(10>20){
//     console.log("let go")

// }
// else{
//     console.log("hell nah")
// }


// var number = 33
// var number2 = 35;
// if(number>number2){
//     console.log("number is greater than 2")
// }
// else{
//     console.log("number is lesser than number2")
// }

// var age=13;
// if(age<18){
//     console.log("Not eli")
// }
// else if(age==18){
//     console.log("Eli for LL")
// }
// else {
//     console.log("Eli for DL")
// }

// function multiplication(number1, number2, number3, number4) {
//       console.log(number1, number2, number3, number4);
//     }
//     multiplication(1, 2, 3, 4);

// var number=5;
// if(number%2==0){
//     console.log(`Given Number ${number} is even`)
// }
// else{
//     console.log(`Given Number ${number} is odd`)
// }

// function questionSecond(starting, ending, sequence) {
//     for (var i = starting; i <= ending; i += sequence) {
//       console.log(i);
//     }
//   }
  
//   questionSecond(1, 100, 2);


//   var number=(60,20)
//   var evenCount=0;
//   var oddCount=0;
//   function num(){
//     for(var i=0;i>=num.length;i--){
//         if(i%2==0){
//             evenCount++;
            
//         }
//         else{
//             oddCount++
//         }
//     }
//     console.log(`Even count:${evenCount}`)
//     console.log(`odd count:${oddCount}`)
//   }
 

// function countOddEven(starting, ending) {
//     var evenCount = 0;
//     var oddCount = 0;
//     for (var i = starting; i >= ending; i--) {
//       // console.log(i);
//       if (i % 2 == 0) {
//         // even
//         evenCount++;
//       } else {
//         // odd
//         oddCount++;
//       }
//     }
//     console.log(`Even count : ${evenCount}`);
//     console.log(`Odd count :  ${oddCount}`);
//   }
  
//   countOddEven(60, 20);


// function sumOfAllNumbers(starting, ending) {
//     var count = 0; 
//     for (var i = starting; i <= ending; i++) {
//       // console.log(i)
//       // console.log(count, "count", i, "i");
//       count = count + i;
      
//       // i++
//     }
//     console.log("count :" ,count);
//   }
  
//   sumOfAllNumbers(10, 12);



// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function findCountEvenFromArray(arry) {
//       var count = 0;
//       for (var i = 0; i <= arry.length - 1; i++) {
       
//         if (array[i] % 2 == 0) {
//           count++;
//         }
//       }
//         console.log(count, "count");
//     //   return count;
//     }
//     findCountEvenFromArray(array)

var array = [1,2,3,4,5,2,3,1,3,2,5,3,2,1,4,54,2,2,1]; 
var target = 5;
// 1 + 2
// 2 + 3
// 3 + 4
// 4 + 5
// 1 + 2
// 1 + 3
// 1 + 4
// 1 + 5
// 2 + 3
// 2 + 4
// 2 + 5
// 3 + 4 
// 3 + 5
// 4 + 5


// function findPairs(array,target ){
    
//     for(var i = 0; i <= array.length - 1 ; i++){
//         for(var j = i + 1 ; j <= array.length - 1; j++){
//             // console.log(array[i],i, array[j],j)
//             if(array[i] + array[j] === target){
//                 console.log(array[i], array[j])
//                 // return [i, j]
//             }
//         }
//     }
// }
// console.log(findPairs(array, target))

// 1. Create an array with the numbers 1 through 10. Write a function to remove all even
//  numbers from this array and return the new array.
//  Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  Output: [1, 3, 5, 7, 9]


// var input=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function num(array){
//     for(var i=0;i<=array.length-1;i++){
//         if(array[i]%2==0){
//             input.splice(1,1)
//         }
//     }
//     console.log(array,"even")
// }
// num(input)

// 2. Write a function that takes a string as an argument and returns the number of
// vowels in the string. Ignore case sensitivity.
// Input: "Hello World"
// Output: 3

//  var input="Hello World";
//  var count=0
//  var first="a";
//  var first="e";
//  var first="i";
//  var first="o";
//  var first="u";
//  function vowelst(string){
//     for(var i=0;i<=string.length-1;i++){
//         if(string[i]=="a"||string[i]=="e"||string[i]=="i"||string[i]=="o"||string[i]=="u")
//             count++;
//     }
//     console.log(count)

//  }
//  vowelst(input)

// 3. Write a for loop that prints the first 10 Fibonacci numbers.
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34


// function fib(){
//     var a=0
//     var b=1
//     console.log(a)
//     console.log(b)
//     for(var i=0;i<=8;i++){
//         var temp=a+b
//         console.log(temp)
//         var a=b
//         var b=temp
//     }
       
    
// }
// fib()



// 4. Write a function that takes a month as an argument (e.g., "January") and returns
//  the number of days in that month. Consider leap years for February. Use a switch statement.
//  Input: "February"
//  Output: 28 or 29 (depending on whether it's a leap year)

// var month="February"
// function days(){
//     switch(month){
//         case "April":
//         console.log(30);
//         break;

//         case "January":
//         console.log(30);
//         break;

//         case "March":
//         console.log(31);
//         break;

//         case "February":
//         console.log(28);
//         break;

//         default :
//         console.log("no")
//         break;

        
        

//     }
//     console.log(month)
    
// }
// days(month)


// 6. Write a function that takes three numbers and returns the largest of the three
//  without using the Math.max() method.
//  Input: 3, 5, 1
//  Output: 5

// var input=[3,5,1]
// var a=3;
// var b=5;
// var c=1;

// function meth(a,b,c){
//     {
//         if(a>b && a>c ){
//             console.log("not we wanted")
            
//         }
//         else if(b>c && b>a){
//             console.log("this is what we want")
//         }
//         else {
//             console.log("nope")
//         }
//     }
// }
// meth(a,b,c)


// 7. Write a function that takes an array of numbers and returns the product of all the
// numbers in the array.
// Input: [1, 2, 3, 4]
// Output: 24

// var input=[1, 2, 3, 4];
// var count=1
// function num(array){
//     for(var i=0;i<=array.length-1;i++){
//         count=count*array[i]
//     }
//     console.log(count)
// }
// num(input)



// Test- 5
// Q1. Problem: Given an array of integers and a target sum, return the indices of the two
// numbers that add up to the target.
// ● Input 1: [2, 7, 11, 15],9
// ● Output1: [0, 1]


// var input=[2, 7, 11, 15]
// var target=9

// function num(){
//     var array=[]
//     for(var i=0;i<=input.length-1;i++){
//     for(var j=0;j<=input.length-1;j++){
//         if(input[i]+input[j]==target){
//             array.push(i,j);
//             return array

//         }
//     }
    
// }
    
// }
// console.log(num())


// 3. Merge Two Sorted Arrays
// ● Problem: Given two sorted arrays, merge them into one sorted array.
// ● Input 1: [1, 3, 5],[2, 4, 6]
// ● Output1: [1, 2, 3, 4, 5, 6]

// var a=[1, 3, 5];
// var b=[2, 4, 6];
// var store=a.concat(b)
// store.sort((a,b)=>{
//     return a-b
// })
// console.log(store)


// 3. Remove Duplicates from Sorted Array
// ● Problem: Remove duplicates in place from a sorted array and return the new length.
// ○ Input: nums = [3, 3, 4, 5, 5]
// ■ Output: 3, nums = [3, 4, 5]

// var inp=[3,3,4,5,5,3]

// function duplicateremover(inp){
//     for(var i=0; i<=inp.length-1;i++){
//         if(inp[i]==inp[i+1]){
//             inp.splice(i,1);
//             i--;

//         }
//     }
// console.log(inp.length);
// console.log(inp);
// }
// duplicateremover(inp)


// Question 1: Filtering and Transforming Objects
//  You are given an array of objects representing products in a store. Each object has three
//  properties: name, category, and price. Write a function called filterAndTransformProducts that
//  filters the products by a given category and then returns an array of strings where each string is
//  the product's name and price concatenated

// const inventory = [
// { name: "Laptop", quantity: 5, price: 1000 },
// { name: "Shirt", quantity: 0, price: 50 },
// { name: "Phone", quantity: 10, price: 500 },
// { name: "Shoes", quantity: 3, price: 80 }
// ];


// function new1(inventory){
//     var f=inventory.filter(product=>{
//        return product.quantity>0;

//     });

//     // console.log(f);
//     var totalvalue=0
//     var t=f.forEach(ele => {
//         totalvalue=totalvalue + (ele.quantity*ele.price)
        
//     });
//     console.log(totalvalue)
// }
// new1(inventory)



// const transactions = [
//     { userId: 1, amount: 50, date: "2023-01-01" },
//     { userId: 2, amount: 20, date: "2023-01-02" },
//     { userId: 1, amount: 100, date: "2023-01-03" },
//     { userId: 3, amount: 150, date: "2023-01-04" },
//     { userId: 2, amount: 30, date: "2023-01-05" }
//     ];
//     function topSpenders(transactions) {
//     	let uid = {};
//     	let realuid = [];
//     	for (let trans of transactions) {
//     		const { userId } = trans;
//     		if (uid[userId]) {
//     			uid[userId]++;
//     		} else {
//     			uid[userId] = 1;
//     		}
//     	}
//     	console.log(uid);

//         let vr=Object.keys(uid)
//         for(let v of vr){
//             if(uid[v]>1){
//                 realuid.push(v)
//             }
//         }
//         console.log(v)
//     }
//     topSpenders(transactions)


// 3. Remove Duplicates from Sorted Array
// ● Problem: Remove duplicates in place from a sorted array and return the new length.
// ○ Input: nums = [3, 3, 4, 5, 5]
// ■ Output: 3, nums = [3, 4, 5]


// var inp=[3, 3, 4, 5, 5]
// function duplicateremover(inp){
    
//     for(var i=0;i<=inp.length-1;i++){
//         if(inp[i]==inp[i+1]){
//             inp.slice(i,1)
//             i--;
            
//         }
//     }
//     console.log(inp)
//     console.log(inp.length)
// }
// duplicateremover(inp)

// var inp=[3, 3, 4, 5, 5]
// function duplicateremover(inp){
//         for(var i=0; i<=inp.length-1;i++){
//             if(inp[i]==inp[i+1]){
//                 inp.splice(i,1);
//                 i--;
    
//             }
//         }
//     console.log(inp.length);
//     console.log(inp);
//     }
//     duplicateremover(inp)


// 3. Merge Two Sorted Arrays
// ● Problem: Given two sorted arrays, merge them into one sorted array.
// ● Input 1: [1, 3, 5],[2, 4, 6]
// ● Output1: [1, 2, 3, 4, 5, 6]

// var inp=[1,3,5]
// var inp1=[2,4,6]
// var sorted=inp.concat(inp1)
// // console.log(sorted)
// sorted.sort((a,b)=>{
//     return a-b
// })
// console.log(sorted)


// 1. Problem: Given an array of integers and a target sum, return the indices of the two
// numbers that add up to the target.
// ● Input 1: [2, 7, 11, 15],9
// ● Output1: [0, 1]

// Q3 Find the Longest Substring Without Repeating Characters:
// Question: Write a JavaScript function to find the length of the
// longest substring without repeating characters.
// Examples:
// ● Input: "abcabcbb"
// ○ Output: 3 (substring: "abc")
// ● Input: "bbbbb"
// ○ Output: 1 (substring: "b")
// ● Input: "pwwkew"
// ○ Output: 3 (substring: "wke")
// ● Input: "dvdf"
// ○ Output: 3 (substring: "vdf")


// var input="abcabcbb"
// function arry(input){
//     var string=""
//     for(var i=0;i<=input.length-1;i++){
//         if(string.includes(input[i])){
//             console.log(string)
//             return string.length
//         }
//         else{
//             string=string+input[i]

//         }

            

//     }
//     return string
// }
// console.log(arry(input))


// const students = [
//     { name: "Alice", subjects: ["Math", "Science"] },
//     { name: "Bob", subjects: ["English", "Math"] },
//     { name: "Charlie", subjects: ["Math", "History"] },
//     { name: "David", subjects: ["Science", "History"] }
//   ];
  
//   function countSubjects(students) {
//     const subjectCount = {};
  
//     students.forEach(student => {
//       student.subjects.forEach(subject => {
//         // Check if the subject exists in the object
//         if (subjectCount[subject]) {
//           subjectCount[subject] ++;
//         }
//         else{
//         // Increment the count
//         subjectCount[subject] = 1;
//         }
//       });
//     });
  
//     return subjectCount;
//   }
  
//   console.log(countSubjects(students));
  

// const transactions = [
//         { userId: 1, amount: 50, date: "2023-01-01" },
//         { userId: 2, amount: 20, date: "2023-01-02" },
//         { userId: 1, amount: 100, date: "2023-01-03" },
//         { userId: 3, amount: 150, date: "2023-01-04" },
//         { userId: 2, amount: 30, date: "2023-01-05" }
//         ];

//         function inv(transactions){
//             var obj={};
//             var ary=[];

//             for(let trans of transactions){
//                 const{userId}=trans;
//                 if(obj[userId]){
//                     obj[userId]++
//                 }
//                 else{
//                     obj[userId]=1;
//                 }
//             }
//             // console.log(obj)
//         var value=Object.keys(obj)
//         // console.log(value)
//         for(let v of value){
//             if(obj[v]>1){
//                 ary.push(v)
//             }
//         }
//         console.log(ary)
//         }
//         inv(transactions)

        
// const books = [
//         	{ title: "Book A", author: "Author 1", genres: ["Fiction", "Mystery"] },
//         	{ title: "Book B", author: "Author 2", genres: ["Non-fiction", "History"] },
//         	{ title: "Book C", author: "Author 3", genres: ["Fiction", "History"] },
//         	{ title: "Book D", author: "Author 4", genres: ["Mystery", "Thriller"] },
//         ];

//         function bok(books){
//             var obj={}

//             for(let b of books){
//                 for(let gen of b.genres){
//                     if(obj[gen]){
//                         obj[gen]++;
//                     }
//                     else{
//                         obj[gen]=1
//                     }
//                 }
//             }
//             console.log(obj)
//         }
//         bok(books)
       

// Find the First Non-Repeating Character:
// Question: Write a JavaScript function to find the first non-repeating character in a string.
// Examples:
// ● Input: "aabbccddeef"
// ○ Output: "f"

// var inp="aabbccddeef"
// function in1(inp){
//     for(var i=0;i<=inp.length-1;i++){
//         // console.log(inp.indexOf(inp[i]))
//         // console.log(inp.lastIndexOf(inp[i]))
//         // console.log("-----------")
//         if(inp.indexOf(inp[i])==inp.lastIndexOf(inp[i])){
//             return inp[i]
//         }
//     }
    
// }
// console.log(in1(inp))


// var inp=[2,3,3,4]
// console.log(inp.indexOf(4))







// Find Maximum in an Array 

// input = [1, 5, 3, 9, 2];
// var a = 0;  

// function num() {
//     for (var i = 0; i <= input.length - 1; i++) {
//         if (input[i] > a) { 
//             a = input[i];    
//         }
//     }
//     return a; 
// }

// console.log(num());  

// Reverse String 

// Palindrome 

// var input="racecar"
// function car(input){
//     for(var i=0;i<Math.floor(input.length/2)){
//         if(input[i]!==input[6-i]){
//             return false
//         }
//         if(input[i]==input[6-i]){
//             console.log("Palindrome")
//         }
//     }
// }
// console.log(car)

// var input = "racecar"
// function car(input) {
//     for (var i = 0; i < Math.floor(input.length / 2); i++) {
//         if (input[i] !== input[input.length - 1 - i]) {
//             return "not palindrome";
//         }
        
           
        
//     }
//     return "palindrome"
// }
// console.log(car(input));



// input=[1,2,3,4]

// function ch(input){
//     var a=0
//     for(var i=0;i<=input.length-1;i++){
//         a=input[i]+a


//     }
//     console.log(a)
    
// }
// ch(input)


// input="aabccdeff"
// function ch(input){
// for(var i=0;i<=input.length-1;i++){
//     if(input[i]==input[i+1])
// }
// }

// var input=[5,7,2,9,3]
// input.sort((a,b)=>{
//     return b-a
// })
// for(var i=0;i<=input.length-1;i++){
//     if(i==1){
//         console.log(input[i])
//     }
// }



// var inp=[1,2,3,4,5]
// function ch(inp){
//     for(var i=0;i<=inp.length-1;i++){
//         if(inp[i]+1!==inp[i+1]){
//             return "false"
//         }
        
//     }
//     return "true"
// }
// console.log(ch(inp))


var input=5
var count=1;
for(var i=5;i>0;i--){
    count=i*count

} 
console.log(count)   
