
let today = new Date();
let YearCode = today.getFullYear();
let idgeneration = Date.now();
let uniqueId = YearCode + "" + idgeneration

function getUser() {
    let fullName = document.getElementById("fullName").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value;
    let state = document.getElementById("state").value;
    let mobile = document.getElementById("mobile").value;

  const displayInfo = document.createElement("li");
    const textNode = document.createTextNode(fullName + age + gender + address + state + mobile + uniqueId);
    displayInfo.appendChild(textNode);
    document.getElementById('generatedId').appendChild(displayInfo);
}
