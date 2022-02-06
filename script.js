//VARIABLES
const noAccountImg = document.querySelector(".account__img");
const accountImg = document.querySelector(".account__img--logged");
const noAccountName = document.querySelector(".account__name");
const accountName = document.querySelector(".account__name--logged");
const signedOut = document.querySelector(".account__viewer");
const signedIn = document.querySelector(".account__viewer--logged");



//EVENT LISTENERS
signedOut.addEventListener("click", signInProcess);
signedIn.addEventListener("click", signOutProcess);




//FUNCTIONS
//Navigation Bar & Hamburger
function openMenu(){
  document.body.classList += " menu--open"
}

function closeMenu(){
  document.body.classList.remove('menu--open')
}


//Login-Logout Status
  noAccountImg.style.display = "block";
  noAccountName.style.display = "block";
  signedOut.style.display = "block";
  accountImg.style.display = "none";
  accountName.style.display = "none";
  signedIn.style.display = "none";




