// Q. You work in the weather department and have been tasked with tracking temperature 
// fluctuations throughout the day. You start measuring when the temperature is exactly 0 
// degrees. From this point, the temperature can either rise or fall. Write a function findMax 
// Temperature that takes an integer n, representing the number of temperature readings taken 
// during the day, and an array TemperatureChange that indicates the change in temperature from
// one reading to the next. Your function should return the highest temperature reached during 
// the day, after the measurement has started. Note: Positive numbers in the TemperatureChange 
// array represent an increase in temperature. Negative numbers in the TemperatureChange array 
// represent a decrease in temperature. The highest temperature can be at or below 0 degrees.


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