const apiKey = "12a2b8e9e333cb37443393fd06bc8d8e";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

var userInput = document.querySelector(".user input");
var userButton = document.querySelector(".user button");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        alert("Invalid City Name. Please enter a city name.");
        userInput.value = "";
    } else {
        var data = await response.json();
        const d = new Date();
        document.querySelector(".tDate").innerHTML = d;
    
        document.querySelector(".city").innerHTML = "City: " + data.name;
        document.querySelector(".temp").innerHTML = "Temperature: " + Math.round(data.main.temp - 273.15) + "°C";
        document.querySelector(".humid").innerHTML = "Humidity: " + data.main.humidity + "%";
        document.querySelector(".windspd").innerHTML = "Wind speed: " + data.wind.speed + " km/h";
    
        console.log(data);
    }

}

userButton.addEventListener("click", ()=>{
    checkWeather(userInput.value);
})

checkWeather("london");