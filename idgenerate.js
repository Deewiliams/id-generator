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

    clone.querySelector(".template-name").textContent =  inputStorage[i].fullname;
    clone.querySelector(".template-age").textContent = inputStorage[i].age;
    clone.querySelector(".template-gender").textContent = inputStorage[i].gender;
    clone.querySelector(".template-address").textContent = inputStorage[i].state;
    clone.querySelector(".template-mobile").textContent = inputStorage[i].mobile;
    clone.querySelector(".template-uniqueId").textContent = inputStorage[i].uniqueId;
    lists.append(clone);
  }
}
