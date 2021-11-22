//calculating day of week
function getDayOfWeek   (y,m,d){
    let t = [0,3,2,5,0,3,5,1,4,6,2,4]
    y -= m < 3;
    return Math.round((y + y/4 - y/100 + y/400 + t[m-1] + d) % 7);
}

const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
const femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const  gender= document.querySelector("#gender")//prompt("Please enter your gender ");
const yearOfBirth = document.querySelector("#year")//prompt("Please enter year of birth: ");
const monthOfBirth = document.querySelector("#month")//prompt("Please enter month ");
const dateOfBirth = document.querySelector("#date")//prompt("Please enter date ");



document.querySelector("#submit").addEventListener("click",()=>{
    
    console.log(getDayOfWeek(parseInt(yearOfBirth.value),parseInt(monthOfBirth.value),parseInt(dateOfBirth.value)))

        if(gender.value.toLowerCase()=="male"){
            alert(maleNames[getDayOfWeek(parseInt(yearOfBirth.value),parseInt(monthOfBirth.value),parseInt(dateOfBirth.value))])
        }else if (gender.value.toLowerCase()=="female") {
            alert(femaleNames[getDayOfWeek(parseInt(yearOfBirth.value),parseInt(monthOfBirth.value),parseInt(dateOfBirth.value))])
        }

})



