// Example function to set background color based on weather
function setBackgroundBasedOnWeather(weather) {
    const body = document.body;
    if (weather === 'clear') {
        body.style.backgroundColor = '#2c3e50'; // Dark Clear Sky
    } else if (weather === 'clouds') {
        body.style.backgroundColor = '#34495e'; // Dark Cloudy
    } else if (weather === 'rain') {
        body.style.backgroundColor = '#2c3e50'; // Dark Rainy
    } else if (weather === 'snow') {
        body.style.backgroundColor = '#95a5a6'; // Dark Snowy
    } else if (weather === 'sunny') {
        body.style.backgroundColor = '#d35400'; // Dark Amber for Sunny
    } else {
        body.style.backgroundColor = '#171b27'; // Default Dark
    }
}

// Mock weather data (replace this with actual data fetching)
const weather = 'sunny'; // Example weather condition

// Set the background based on the mock weather
setBackgroundBasedOnWeather(weather);

// Fetch weather data and update background (use actual data in production)
// Example:
// fetch('https://api.openweathermap.org/data/2.5/weather?q=Vijayawada&appid=YOUR_API_KEY')
//     .then(response => response.json())
//     .then(data => {
//         const weatherCondition = data.weather[0].main.toLowerCase();
//         setBackgroundBasedOnWeather(weatherCondition);
//     });
