// function getUser(){
//     const inputValues = document.querySelector('#myForm').value;
//     console.log('information',inputValues);
//     let today = new Date();
//     let year = today.getFullYear()
//     let uniqueId = Date.now()

//     const displayInfo = document.createElement("li");
//     const textNode = document.createTextNode(inputValues + year + uniqueId);
//     displayInfo.appendChild(textNode);
//     document.getElementById('generatedId').appendChild(displayInfo);
// }
let today = new Date();
let year = today.getFullYear();
let dateNow = Date.now();
let uniqueId = year + dateNow

function getUser() {
    let fullName = document.getElementById("fullName").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value;
    let state = document.getElementById("state").value;
    let mobile = document.getElementById("mobile").value;

  const displayInfo = document.createElement("li");
    const textNode = document.createTextNode(fullName + age + gender + address + state + mobile);
    displayInfo.appendChild(textNode);
    document.getElementById('generatedId').appendChild(displayInfo);
}
