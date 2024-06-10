
var lsCityName = localStorage.getItem (currentCityNameKey);
if(lsCityName===null) {
    updateWeather("București")
    displayWeatherForcast("timisoara")
}
else {
var cityButton = document.querySelector (`.${lsCityName}`);
updateWeather(lsCityName, cityButton.innerText);
displayWeatherForcast (lsCityName)
}