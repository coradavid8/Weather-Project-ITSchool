function displayWeatherForcast (city) {
    var url = getForcastUrl (city);


    fetch (url)
    .then ((response) => response.json())
    .then ((data) => {
        console.log(data);

        const {list} = data;
        var dayToMesurementsMap = {};
        list.forEach ((measurement) => {
            

            const {dt} = measurement;

            var dayOfWeekName = getDayOfWeekName (dt);
            if (dayToMesurementsMap[dayOfWeekName]) {
                dayToMesurementsMap[dayOfWeekName].push (measurement);

            }
            else {
                dayToMesurementsMap [dayOfWeekName] = [measurement];
            }

        });
        var weatherForcastContainer = document.querySelector (".weather-forecast");
         for (day in dayToMesurementsMap) {
            weatherForcastContainer.innerHTML += `<h3 class = "text-primary"> ${day} </h3>`
            dayToMesurementsMap [day].forEach ((dayMesurement) => {
                const {dt, weather, main} = dayMesurement;
                var displayTime = getDisplayTime (dt);
                var weatherIcon = getCurrentWeatherIcon(weather[0].icon);
                var temperature = Math.round(main.temp);
                var description = weather[0].description;
                var realFeel = Math.round (main.feels_like);

                weatherForcastContainer.innerHTML += `
                <div class = "weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3" >
                <p class = "fs-5">${displayTime}</p>
                <img src = ${weatherIcon} />
                <p class = "fs-2" ><strong>${temperature}°C</strong></p>
                <p class = "fs-5">${description}</p>
                <p class = "fs-5">Real feel: <strong>${realFeel}°C</strong></p>

                </div>
                `
                   
            })
         }


    })
}