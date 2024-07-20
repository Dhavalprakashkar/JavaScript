// function Addition(starting,ending){
//    var count=0;
//    for(var i=starting;i<=ending;i++){
//     count=count+i;
// console.log(count, "count", i, "count")
//    }
// }
// Addition(20,70)

// // Q.Factorial

// function findFactorial(number){
//     var count = 1; // 2 6
//     for(var i = 2; i <= number; i++){
//         // console.log(i)
//         count = count * i;
//         // i++ 4
//     }
//     console.log(count)
// // }

// findFactorial(4)


// Q 8 factorial

// function factorial(numb){
//     var count = 1;
//     for(var i= 1; i<= numb;i++){
//         count= count * i;
//     }
//     console.log(count);

// }
// factorial(8)








// Palindrome

function palindrome(string){
    for(var i=0;i<Math.floor(string.length/2);i++){
        if(string[i] !=string[string.length-1-i]){
            return false;
        }
    }
    return true
}
console.log(palindrome("madmm"));




