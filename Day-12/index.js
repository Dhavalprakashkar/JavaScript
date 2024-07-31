// // Q Give an aray, do addition of numbers by using while loop .

// var array = [2, 4, 5, 6, 7, 8, 3, 2];
// // ouput : 37

// var array = [2, 4, 5, 6, 7, 8, 3, 2];

// function addition(array){
//     var i=0;
//     var count=0;
//     while(i<=array.length-1){
//         count=count+array[i]
//         i++;

//     }
//     return count;
// }
// console.log("Addition of number",addition(array));



// // Q Give an aray, find only odd numbers by using while loop .

// var array = [2, 4, 5, 6, 7, 8, 3, 2];
// // ouput
// // 5
// // 7
// // 3


// var array = [2, 4, 5, 6, 7, 8, 3, 2];
// function oddnumber(array){
//     var i=0;
//     while(i<=array.length-1){
//         if(array[i]%2!==0){
//             console.log("Odd number",array[i])
            

//         }
//         i++;


//     }
// }
// oddnumber(array);







// // Q Give an aray, find count of even numbers by using while loop .

var array = [2, 4, 5, 6, 7, 8, 3, 2];

ouput : 5

var array = [2, 4, 5, 6, 7, 8, 3, 2];
function evennumber(array){
    var i=0;
    var count=0;
    while(i<=array.length-1){
        if(array[i]%2==0){
            count++;
          
            
            

        }
        i++;


    }
    return count;
}
console.log("Count of Even Number",evennumber(array));
