
function createElement(value){
    let inputGroup = document.createElement("div");
    inputGroup.classList =  "input-group";
  

    let input = document.createElement("input");
    input.setAttribute("type","text")
    input.setAttribute("id",value.toLowerCase())
    input.classList="user-input"




    let label = document.createElement("label");
    label.textContent = value;
    label.classList =  "user-label";


    inputGroup.appendChild(label)
    inputGroup.appendChild(input)
    document.querySelector("#main").appendChild(inputGroup);
}


let renderForm = ["Year","Month","Date","Gender"]

let submitButton = document.createElement("button")
submitButton.classList="user-button"
submitButton.textContent="Submit"
submitButton.setAttribute("id","submit")

renderForm.forEach(data=>createElement(data));
document.querySelector("#main").appendChild(submitButton);
