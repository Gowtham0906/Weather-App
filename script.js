const apikey = '5a6559440f23d64e8084924fb20c4e92';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    var data = await response.json()

    console.log(data)

    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%"
    document.querySelector(".windspeed").innerHTML=data.wind.speed + "km/h"
    document.querySelector(".country").innerHTML=data.sys.country
    
   
  if(data.weather[0].main=="Mist"){
   
    weatherIcon.src = "Images/rain.png"

  }
  else if(data.weather[0].main=="Clouds"){
    weatherIcon.src = "Images/cloudy.png";

  }
  else if(data.weather[0].main=="Wind"){
    weatherIcon.src = "Images/wind.png";

  }
  else if(data.weather[0].main=="Clear"){
    weatherIcon.src = "Images/clear.png";

  }
  else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src = "Images/drizzle.png";

  }
  else if(data.weather[0].main=="Humidity"){
    weatherIcon.src = "Images/humidity.png";

  }
  else if(data.weather[0].main=="Rain"){
    weatherIcon.src = "Images/rain.png";

  }
  else if(data.weather[0].main=="Snow"){
    weatherIcon.src = "Images/snow.png";

  }
  

}


searchbtn.addEventListener("click", ()=>{

    checkWeather(searchbox.value);
   
})



checkWeather()

