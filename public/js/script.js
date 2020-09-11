/*function getWeather() {

    let cityName = document.getElementById('city').value
    if(cityName === '') {
        return alert('Please enter a city')
    }

    let cityDiv = document.getElementById('cityweather')
    cityDiv.innerHTML = ''

    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText)
 			cityDiv.innerHTML = cityDiv.innerHTML + `
			<h1>Weather for ${response.name} </h1>
			<ul>
			<li>Location: LON:${response.coord.lon}, LAT:${response.coord.lat}</li>
			<li>Main: ${response.weather[0].main}</li>
			<li>Desc: ${response.weather[0].description}</li>
			</ul>
      <p>${xhr.responseText}</p>
			`
        }
    }
    xhr.open('GET', `/weather?city=${cityName}`, true)
    xhr.send()
}*/

function getRecipes() {

  let ingredientName = document.getElementById('ingredient').value
  if(ingredientName === '') {
    return alert('Please enter an ingredient')
  }

  let recipeDiv = document.getElementById('ingrecipe')
  recipeDiv.innerHTML = ''

  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText)
    //console.log(response.recipes[1])
    for(var i = 0; i < response.recipes.length; i+=3) {
      recipeDiv.innerHTML = recipeDiv.innerHTML + `
      <div class="row">
        <div class="column" style="width:image width px; font-size:80%; text-align:center;">
          <a href=${response.recipes[i].f2f_url} target="_blank">
            <img src=${response.recipes[i].image_url} style="width:100%" style="padding-bottom:0.5em;">
          </a>
          ${response.recipes[i].title}
        </div>
        <div class="column" style="width:image width px; font-size:80%; text-align:center;">
          <a href=${response.recipes[i+1].f2f_url} target="_blank">
            <img src=${response.recipes[i+1].image_url} style="width:100%" style="padding-bottom:0.5em;">
          </a>
          ${response.recipes[i+1].title}
        </div>
        <div class="column" style="width:image width px; font-size:80%; text-align:center;">
          <a href=${response.recipes[i+2].f2f_url} target="_blank">
            <img src=${response.recipes[i+2].image_url} style="width:100%" style="padding-bottom:0.5em;">
          </a>
          ${response.recipes[i+2].title}
        </div>
      </div>`
    }
    }
  }
  xhr.open('GET', `/recipes?ingredient=${ingredientName}`, true)
  xhr.send()
}

//Attach Enter-key Handler
const ENTER=13
document.getElementById("ingredient")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === ENTER) {
        document.getElementById("submit").click();
    }
});
