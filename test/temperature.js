var inp=[2,3,-1,-3,5,7]
var n=7  

function temperature(inp,n){
    let currenttemp=0;
    let maxtemp=0;
    for(var i=0; i<n; i++){
        currenttemp=currenttemp+inp[i];
        if(currenttemp>maxtemp){
            maxtemp=currenttemp;
        }
    }
    return maxtemp;

}
console.log(temperature(inp,n))