//calculating day of week
function getDayOfWeek   (y,m,d){
    let t = [0,3,2,5,0,3,5,1,4,6,2,4]
    y -= m < 3;
    return Math.round((y + y/4 - y/100 + y/400 + t[m-1] + d) % 7);
}

const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
const femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let gender = prompt("Please enter your gender ");
let yearOfBirth = prompt("Please enter year of birth: ");
let monthOfBirth = prompt("Please enter month ");
let dateOfBirth = prompt("Please enter date ");


console.log(getDayOfWeek(parseInt(yearOfBirth),parseInt(monthOfBirth),parseInt(dateOfBirth)))

if(gender.toLowerCase()=="male"){
    alert(maleNames[getDayOfWeek(parseInt(yearOfBirth),parseInt(monthOfBirth),parseInt(dateOfBirth))])
}else if (gender.toLowerCase()=="female") {
    alert(femaleNames[getDayOfWeek(parseInt(yearOfBirth),parseInt(monthOfBirth),parseInt(dateOfBirth))])
}

