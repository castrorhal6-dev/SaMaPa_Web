// ================= REGISTER FORM =================

const signupForm = document.getElementById("signupForm");

// ================= SUBMIT REGISTRATION =================

signupForm.addEventListener("submit", function(e){

  e.preventDefault();

  // ================= GET INPUTS =================

  const inputs = signupForm.querySelectorAll("input");

  const selects = signupForm.querySelectorAll("select");

  // ================= INPUT VALUES =================

  const name = inputs[0].value;

  const age = inputs[1].value;

  const birthday = inputs[2].value;

  const contact = inputs[3].value;

  const fishCage = inputs[4].value;

  // ================= SELECT VALUES =================

  const municipality = selects[0].value;

  const fishpondArea = selects[1].value;

  const memberType = selects[2].value;

  const bangusConcept = selects[3].value;

  const operationArea = selects[4].value;

  const cycle = selects[5].value;

  // ================= CREATE OBJECT =================

  const userData = {

    name,
    age,
    birthday,
    contact,
    municipality,
    fishpondArea,
    memberType,
    bangusConcept,
    operationArea,
    fishCage,
    cycle

  };

  // ================= GET OLD USERS =================

  let users = JSON.parse(localStorage.getItem("fishpondUsers")) || [];

  // ================= SAVE NEW USER =================

  users.push(userData);

  localStorage.setItem("fishpondUsers", JSON.stringify(users));

  // ================= SUCCESS =================

  alert("Registration Submitted Successfully!");

  // ================= RESET FORM =================

  signupForm.reset();

});
