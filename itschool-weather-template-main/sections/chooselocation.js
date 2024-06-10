var bucharest = document.querySelector (".bucharest");
var timisoara = document.querySelector (".timisoara");
var oradea = document.querySelector (".oradea");
var arad = document.querySelector (".arad");
var sibiu = document.querySelector (".sibiu");
var currentCityName = document.querySelector ("#CurrentCityName");



bucharest.addEventListener('click',() => {
    updateWeather ("bucharest", bucharest.innerText)
})

timisoara.addEventListener('click',() => {
    updateWeather ("timisoara" ,timisoara.innerText)
})

oradea.addEventListener('click',() => {
    updateWeather ("oradea" ,oradea.innerText)
})

arad.addEventListener('click',() => {
    updateWeather ("arad" ,arad.innerText)   
})

sibiu.addEventListener('click',() => {
    updateWeather ("sibiu" ,sibiu.innerText)    
})

function updateWeather (city,displayName) {
    localStorage.setItem (currentCityNameKey, city)
    currentCityName.innerHTML = displayName
    displayWeather (city)
}
