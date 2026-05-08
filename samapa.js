// ================= ELEMENTS =================

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

// ================= SHOW LOGIN =================

function showLogin(){

  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");

  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
}

// ================= SHOW SIGNUP =================

function showSignup(){

  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");

  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
}

// ================= SIGNUP =================

// ================= SIGNUP =================

signupForm.addEventListener("submit", function(e){

  e.preventDefault();

  // GET ALL INPUTS
  const inputs = signupForm.querySelectorAll("input");

  // GET SELECT
  const sqmSelect = signupForm.querySelector("select");

  // VALUES
  const fullname = inputs[0].value;
  const address = inputs[1].value;
  const fishpond = inputs[2].value;

  // SELECT VALUE
  const sqm = sqmSelect.value;

  const email = inputs[3].value;
  const password = inputs[4].value;

  // VALIDATE SQM
  if(sqm === ""){

    alert("Please select fishpond size.");

    return;
  }

  // CREATE OBJECT
  const userData = {
    fullname,
    address,
    fishpond,
    sqm,
    email,
    password
  };

  // GET OLD USERS
  let users = JSON.parse(localStorage.getItem("fishpondUsers")) || [];

  // SAVE NEW USER
  users.push(userData);

  localStorage.setItem("fishpondUsers", JSON.stringify(users));

  alert("Fishpond registered successfully!");

  // RESET FORM
  signupForm.reset();

  // GO TO LOGIN
  showLogin();

});

// ================= LOGIN =================

loginForm.addEventListener("submit", function(e){

  e.preventDefault();

  const inputs = loginForm.querySelectorAll("input");

  const email = inputs[0].value;
  const password = inputs[1].value;

  const users = JSON.parse(localStorage.getItem("fishpondUsers")) || [];

  const foundUser = users.find(user =>
    user.email === email &&
    user.password === password
  );

  if(foundUser){

    alert("Login successful!");

  }else{

    alert("Invalid email or password");

  }

});