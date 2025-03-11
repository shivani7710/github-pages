let apiKey = "d99f91e28e688e5bf69a66e426efa6e4";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".text input");
const searchBtn = document.querySelector(".text button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log("The data: ", data)

    const cityName = document.querySelector(".city").innerHTML = data.name;
    console.log("The city Name :" , cityName)

    const temperature = document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    console.log("The Temperature :" , temperature)

    const humidity = document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    console.log("The Humidity is :" , humidity)

    const windSpeed = document.querySelector(".wind").innerHTML = data.wind.speed + " km/hrs";
    console.log("The Wind speed is  :" , windSpeed)

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "sunnycloud.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "sunny.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "cloud.png"
    }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "danger.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "normalcloud.png"
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
