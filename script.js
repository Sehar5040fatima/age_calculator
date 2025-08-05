
const resultBtn = document.getElementById("result");

resultBtn.addEventListener('click',  function ()  {
    const age = document.getElementById("age");


const dateValue = document.getElementById("date").value;

const today = new Date();
const dob = new Date(dateValue);

const year = today.getFullYear() - dob.getFullYear();
const month = today.getMonth() - dob.getMonth();
const day = today.getDay() - dob.getDay();

  if (!dateValue) {
    age.textContent = "Please enter a valid date of birth.";
    return;
  }

  age.textContent = year + " years " + month + " months " + day + " days";
  
})
