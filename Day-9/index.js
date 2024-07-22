// Q Given an array of names find out index of target . 
// var students = ["rahul", "nehal", "ali", "amod", "adep"];
// var target = "adep"
// output  : 4

var students = ["rahul", "nehal", "ali", "amod", "adep"];
function finder(array){

var target = "adep"
for(i=0; i<=array.length-1; i++){
if(array[i]==target){
    return i;
}

}


}

console.log(finder(students));
