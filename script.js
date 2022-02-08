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




//Food API & Results Page
const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});


// get meal list that matches with the ingredients
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });
}
