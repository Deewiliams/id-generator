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
    console.log('id',uniqueId);
  let fullName = document.getElementById("fullName").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("age").value;
  let address = document.getElementById("age").value;
  let state = document.getElementById("age").value;
  let mobile = document.getElementById("age").value;
  alert(
    "fullName " +
      fullName +
      " age " +
      age +
      "gender" +
      gender +
      "address" +
      address +
      " state" +
      state + uniqueId
    //   +
    //   "mobile" +
    //   mobile
    //   + 'id number' + uniqueId
  );
}
