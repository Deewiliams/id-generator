
function getUser(){
    const inputValues = document.querySelector("input").value;
    let today = new Date();
    let year = today.getFullYear()
    let uniqueId = Date.now()

    const displayInfo = document.createElement("li");
    const textNode = document.createTextNode(inputValues + year + uniqueId);
    displayInfo.appendChild(textNode);
    document.getElementById('generatedId').appendChild(displayInfo);
}