let container = document.querySelector("section");

function convertFromJson(response) {
    return response.json();
}


function displayRecipes(response) {
    let recipeDisplay = '';
    for(let i = 0 ; i < response.results.length ; i++) {

    let recipeInfo = `
    <div>
        <h1>${response.results[i].title}</h1>
        <a href="${response.results[i].href}"><img src="${response.results[i].thumbnail}"></a>
    </div>`
    
    recipeDisplay += recipeInfo;
        
     }
     container.innerHTML = recipeDisplay;
}


let searchBox = document.querySelector("#searchBox");
let submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function() {
    fetch(`https://recipepuppyproxy.herokuapp.com/api/?i=${searchBox.value}`)
        .then(convertFromJson)
        .then(displayRecipes);
});



