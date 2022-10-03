let today = new Date();
let YearCode = today.getFullYear();
let idgeneration = Date.now();
let uniqueId = YearCode + "" + idgeneration;
function getUser() {
  const inputStorage = [];
  let fullName = document.getElementById("fullName").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let address = document.getElementById("address").value;
  let state = document.getElementById("state").value;
  let mobile = document.getElementById("mobile").value;

  inputStorage.push({
    fullname: fullName,
    age: age,
    gender: gender,
    address: address,
    state: state,
    mobile: mobile,
    uniqueId: uniqueId,
  });
  for (var i = 0; i < inputStorage.length; i++) {
    const template = document.querySelector("#template");
    const lists = document.querySelector(".lists");

    const clone = template.content.cloneNode(true);

    clone.querySelector(".template-city").textContent =  inputStorage[i].fullname;
    clone.querySelector(".template-country").textContent = inputStorage[i].age;
    lists.append(clone);
  }

  // var displayInfo = document.createElement(`
  // <table>

  // </table>
  // `);
  // const textNode = document.createTextNode(fullName + "" + age + "" + gender + "" + address + "" +  state + "" + mobile + "" + uniqueId);
  // displayInfo.appendChild(textNode);
  // document.getElementById('generatedId').appendChild(displayInfo);
}
