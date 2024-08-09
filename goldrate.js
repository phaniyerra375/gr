function setBackgroundBasedOnWeather(weather) {
    const body = document.body;
    if (weather === 'clear') {
        body.style.backgroundColor = '#2c3e50';
    } else if (weather === 'clouds') {
        body.style.backgroundColor = '#34495e'; 
    } else if (weather === 'rain') {
        body.style.backgroundColor = '#2c3e50'; // Dark Rainy
    } else if (weather === 'snow') {
        body.style.backgroundColor = '#95a5a6'; // Dark Snowy
    } else {
        body.style.backgroundColor = '#171b27'; // Default Dark
    }
}
const weather = 'clear'; 
setBackgroundBasedOnWeather(weather);