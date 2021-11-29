//calculating day of week
function getDayOfWeek   (y,m,d){
    let t = [0,3,2,5,0,3,5,1,4,6,2,4]
    y -= m < 3;
    return Math.floor((y + y/4 - y/100 + y/400 + t[m-1] + d) % 7);
}

const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const  gender= document.querySelector("#gender")//prompt("Please enter your gender ");
const yearOfBirth = document.querySelector("#year")//prompt("Please enter year of birth: ");
const monthOfBirth = document.querySelector("#month")//prompt("Please enter month ");
const dateOfBirth = document.querySelector("#date")//prompt("Please enter date ");
//error collector
let errors = []

//Error checker
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





document.querySelector("#submit").addEventListener("click",()=>{

    //check for errors
    errorCheck()

    if (errors.length>0){
        alert(errors.map(data=>`${data} \n`))

    }else{
        //render the output
        let divider = document.createElement('hr')
        document.querySelector('#main').appendChild(divider)
        let message = document.createElement('h3')
        message.textContent = "You were born on a "
        let resultMessage = document.createElement('span')
        message.textContent = "Your Akan name is "
        resultMessage.textContent = (gender.value.toLowerCase()=="male")?maleNames[getDayOfWeek(parseInt(yearOfBirth.value),parseInt(monthOfBirth.value),parseInt(dateOfBirth.value))]:femaleNames[getDayOfWeek(parseInt(yearOfBirth.value),parseInt(monthOfBirth.value),parseInt(dateOfBirth.value))]
        message.appendChild(resultMessage)
        document.querySelector('#main').appendChild(message)

    }

    //clear the errors
    errors=[]

})



