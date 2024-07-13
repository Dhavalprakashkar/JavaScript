function checkIsUserValidForDrivingLicense(age){
    if(age>18 && age<=60){
        console.log("User is eligible for driving license",age);
    }
    else if(age<=17 || age>60){
        console.log("User is not eligible for driving license",age);

    }
    else {
        console.log("User is eliglible for learning license",age);
    }
    


}
checkIsUserValidForDrivingLicense(18)