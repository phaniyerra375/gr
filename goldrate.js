function setBackgroundBasedOnWeather(weather) {
    const body = document.body;
    switch (weather) {
        case 'clear':
            body.style.backgroundColor = '#87CEEB'; // Sky Blue for Clear Sky
            break;
        case 'few clouds':
            body.style.backgroundColor = '#B0C4DE'; // Light Steel Blue for Few Clouds
            break;
        case 'scattered clouds':
            body.style.backgroundColor = '#D3D3D3'; // Light Grey for Scattered Clouds
            break;
        case 'broken clouds':
            body.style.backgroundColor = '#A9A9A9'; // Dark Grey for Broken Clouds
            break;
        case 'shower rain':
        case 'rain':
            body.style.backgroundColor = '#4682B4'; // Steel Blue for Rain
            break;
        case 'thunderstorm':
            body.style.backgroundColor = '#4B0082'; // Indigo for Thunderstorm
            break;
        case 'snow':
            body.style.backgroundColor = '#F0F8FF'; // Alice Blue for Snow
            break;
        case 'mist':
        case 'fog':
            body.style.backgroundColor = '#DCDCDC'; // Gainsboro for Mist or Fog
            break;
        case 'clear sky':
            body.style.backgroundColor = '#00BFFF'; // Deep Sky Blue for Clear Sky
            break;
        case 'overcast clouds':
            body.style.backgroundColor = '#808080'; // Grey for Overcast Clouds
            break;
        default:
            body.style.backgroundColor = '#2F4F4F'; // Dark Slate Gray for Default
            break;
    }
}

// Mock weather data (replace this with actual data fetching)
const weather = 'clear'; // Example weather condition

// Set the background based on the mock weather
setBackgroundBasedOnWeather(weather);

// Fetch weather data and update background (use actual data in production)
// Example:
// fetch('https://api.openweathermap.org/data/2.5/weather?q=Vijayawada&appid=YOUR_API_KEY')
//     .then(response => response.json())
//     .then(data => {
//         const weatherCondition = data.weather[0].description.toLowerCase();
//         setBackgroundBasedOnWeather(weatherCondition);
//     });
