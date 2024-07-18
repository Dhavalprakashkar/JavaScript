// 80-40
function countevenodd(starting,ending){
    var evenCount= 0;
    var oddCount= 0;
    for(var i=starting; i>=ending; i--){
        if(i % 2 == 0){
            evenCount++;
        }
        else{
            oddCount++;
        }
    }
    console.log("Even count",evenCount);
    console.log("Odd count",oddCount);
        
}
countevenodd(80,40);