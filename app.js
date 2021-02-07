const foodMenu = document.getElementById("food-menu");
const foodDetail = document.getElementById("food-detail");
const searchVar=document.getElementById('searchVarID');
const searchBtn=document.getElementById('searchBtnID');
searchBtn.addEventListener('click',() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVar.value}`)
    .then(res => res.json())
    .then(data => {
    // console.log( data);
    
    if(data.meals==null){
        alert ("we have no data");
    }else{
        displayFoodItem(data.meals);
    }
  });
});
const displayFoodItem = categories => {
     console.log(categories.strMeal);
    
     foodMenu.innerHTML = "";
     categories.forEach((food) => {
     const foodItem    = document.createElement("div");
       foodItem.className = "food-card";
       const foodInfo = `
                 <img src="${food.strMealThumb}" class="card-img-top" height="200" width="200">
                     <div class="card-body">
                         <p  class="card-text">${food.strMeal}</p>
                     </div>
             `;
       foodItem.innerHTML = foodInfo;
       foodMenu.appendChild(foodItem);
             foodItem.addEventListener("click", () => {
                const foodDetailInfo = `
                  <img src="${food.strMealThumb}" width="300" height="250">
                  <h1 style="font-weight=700;" >${food.strMeal}</h1>
                  <div >
                      <ul>
                          <li>${food.strIngredient1}</li>
                          <li>${food.strIngredient2}</li>
                          <li>${food.strIngredient3}</li>
                          <li>${food.strIngredient4}</li>
                          <li>${food.strIngredient5}</li>
                          <li>${food.strIngredient6}</li>
                      <ul>
               
                  </div>
              `;
        foodDetail.innerHTML = foodDetailInfo;
        foodDetail.style.display = "flex";
      });
    });
    };














