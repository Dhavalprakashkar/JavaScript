var array =[1,2,3,4,5,6,7,8,9];
function dhaval(arey){
    var count = 0;
    for(var i=0; i<=arey.length-1;i++){
        if(arey[i]%2==0){
            count++;
        }
    }
    console.log(count);
}
dhaval(array)

const months = ["rahul", "nehal", "ali", "amod", "adep"];
months.splice(0,4);

console.log(months);



