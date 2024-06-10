function displayWeather(city){
   
    var apiUrl = getCurrentWeatherEndpoint(city);

    fetch (apiUrl)
    .then ((response) => response.json())
    .then ((data) => {
        const { dt, name, main, weather, wind } = data;

        
        var displayTime = getDisplayTime (dt);
        var dayOfWeekName = getDayOfWeekName (dt);
        var weatherIcon = getCurrentWeatherIcon(weather[0].icon);
        var description = weather[0].description;
        var realFeel = main.feels_like;
        var windKmPerHour = (wind.speed * 3600) / 1000;
        

        var currentWeatherContainer = document.querySelector (".current-weather");
        currentWeatherContainer.innerHTML = `
        <div class = "d-flex justify-content-around">
        <div>
          <p class= "fs-2" mb-2"><strong>${name}</strong></p>
          <p class = "fs-5 mb-2"><strong>${dayOfWeekName}</strong>, ${displayTime}</p>
          <div class = "d-flex ">
            <p class = "fs-1 align-self-center"><strong>${Math.round(main.temp)}°C</strong></p>
            <img src = '${weatherIcon}'/>
          </div>
        </div>
        <div>
          <p class= "fs-5 mb-2">Real feel:<strong> ${Math.round(realFeel)}°C</strong></p>
          <p class = "fs-5 mb-2">${description}</p>
          <p class = "fs-5 mb-2">Vant:<strong> ${Math.round(windKmPerHour)} km/h </strong></p>
          </div>
          </div>
        `;



        
         
          
    });
}
