
//Name Arrays
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

//Weekday Arrays
const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//Error collector array
let errors = []


//input for gender
const  gender= document.querySelector("#gender")//prompt("Please enter your gender ");
//input for year
const yearOfBirth = document.querySelector("#year")//prompt("Please enter year of birth: ");
//input for month
const monthOfBirth = document.querySelector("#month")//prompt("Please enter month ");
//input for date
const dateOfBirth = document.querySelector("#date")

//calculating day of week
const getDayOfWeek  =  (y,m,d)=>{
    let t = [0,3,2,5,0,3,5,1,4,6,2,4]
    y -= m < 3;
    return Math.floor((y + y/4 - y/100 + y/400 + t[m-1] + d) % 7);
}

//Function for checking input Error
const  errorCheck=()=>{
    if(gender.value == ''|| yearOfBirth.value == ''|| monthOfBirth.value== ''||dateOfBirth.value==''){
        errors.push("please fill in all the details")
    }else if(parseInt(monthOfBirth.value)<= 0||parseInt(monthOfBirth.value)>12){
        errors.push("invalid month");
    }else if(parseInt(dateOfBirth.value)<0){
        errors.push("Date can not be less than 1");
    }else if (parseInt(dateOfBirth.value)>31){
        errors.push("Date can not be greater than 31");
    }else if (parseInt(monthOfBirth.value)==4||parseInt(monthOfBirth.value)==6||parseInt(monthOfBirth.value)==9||parseInt(monthOfBirth.value)==11 ){
        if(parseInt(dateOfBirth.value)>30){
            errors.push(`Date can not be greater than 30 in the month of ${month[parseInt(monthOfBirth.value)-1]}`);
        }       
    }else if(parseInt(monthOfBirth.value)==2){
        if(parseInt(yearOfBirth.value)%4==0&&parseInt(dateOfBirth.value)>29){
            errors.push(`Date can not be greater than 29 in the month of ${month[parseInt(monthOfBirth.value)-1]}`);
        }else if(parseInt(yearOfBirth.value)%4!=0&&parseInt(dateOfBirth.value)>28){
            errors.push(`Date can not be greater than 28 in the month of ${month[parseInt(monthOfBirth.value)-1]}`);
        }
    }

    

}


//Event listener for click in a button
document.querySelector("#submit").addEventListener("click",()=>{

    //Check for errors
    errorCheck()

    if (errors.length>0){
        alert(errors.map(data=>`${data}`))
        document.querySelector("#output").innerHTML =`<p>Error: <span>${errors.map(data=>`${data}`)}</span></p>`

    }else{
        let dayNumber = getDayOfWeek(parseInt(yearOfBirth.value),parseInt(monthOfBirth.value),parseInt(dateOfBirth.value))
        let dayOfWeek =day[dayNumber]
        let akanName = (gender.value.toLowerCase()=="male")?maleNames[dayNumber]:femaleNames[dayNumber]
        document.querySelector("#output").innerHTML =`<p>Congratulations! You were born on a ${dayOfWeek} and your Akan name  is <span>${akanName}</span></p>`
    }

    //Clear the errors from array
    errors=[]

})



