var apiKey = "5c0ea5fbb76b0d88319f54e6c17f190e";
var units = `metric`

function getCurrentWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ro&units=${units}`

};
function getCurrentWeatherIcon(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

}
function getForcastUrl (city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=ro&units=${units}`
}