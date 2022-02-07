//VARIABLES
const signInBtn = document.getElementById("sign-in");
const signOutBtn = document.getElementById("sign-out");
const signedOutStatus = document.getElementById("sign-out__status");
const signedInStatus = document.getElementById("sign-in__status");
const signInBtnTwo = document.getElementById("sign-in-two");
const signOutBtnTwo = document.getElementById("sign-out-two");





//FUNCTIONS
//Navigation Bar & Hamburger
function openMenu(){
  document.body.classList += " menu--open"
}

function closeMenu(){
  document.body.classList.remove('menu--open')
}


//Login-Logout Status
signedInStatus.style.display = "none";
signOutBtnTwo.style.display = "none";

signInBtn.addEventListener("click", () => {
  signedInStatus.style.display = "block";
  signedOutStatus.style.display = "none";
  signOutBtnTwo.style.display = "block";
  signInBtnTwo.style.display = "none";
})

signOutBtn.addEventListener("click", () => {
  signedInStatus.style.display = "none";
  signedOutStatus.style.display = "block";
  signOutBtnTwo.style.display = "none";
  signInBtnTwo.style.display = "block";
})

signInBtnTwo.addEventListener("click", () => {
  signedInStatus.style.display = "block";
  signedOutStatus.style.display = "none";
  signOutBtnTwo.style.display = "block";
  signInBtnTwo.style.display = "none";
})

signOutBtnTwo.addEventListener("click", () => {
  signedInStatus.style.display = "none";
  signedOutStatus.style.display = "block";
  signOutBtnTwo.style.display = "none";
  signInBtnTwo.style.display = "block";
})




