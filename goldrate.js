function setBackgroundBasedOnWeather(weather) {
    const body = document.body;
    const weatherDisplay = document.getElementById('weather-display');
    let weatherType = '';

    switch (weather) {
        case 'clear':
            body.style.backgroundColor = '#4682B4'; // Steel Blue for Clear Sky
            weatherType = 'Clear Sky';
            break;
        case 'few clouds':
            body.style.backgroundColor = '#6A5ACD'; // Slate Blue for Few Clouds
            weatherType = 'Few Clouds';
            break;
        case 'scattered clouds':
            body.style.backgroundColor = '#A9A9A9'; // Dark Grey for Scattered Clouds
            weatherType = 'Scattered Clouds';
            break;
        case 'broken clouds':
            body.style.backgroundColor = '#708090'; // Slate Grey for Broken Clouds
            weatherType = 'Broken Clouds';
            break;
        case 'shower rain':
            body.style.backgroundColor = '#4169E1'; // Royal Blue for Shower Rain
            weatherType = 'Shower Rain';
            break;
        case 'rain':
            body.style.backgroundColor = '#4169E1'; // Royal Blue for Rain
            weatherType = 'Rain';
            break;
        case 'thunderstorm':
            body.style.backgroundColor = '#2F4F4F'; // Dark Slate Grey for Thunderstorm
            weatherType = 'Thunderstorm';
            break;
        case 'snow':
            body.style.backgroundColor = '#B0E0E6'; // Powder Blue for Snow
            weatherType = 'Snow';
            break;
        case 'mist':
            body.style.backgroundColor = '#BEBEBE'; // Gray for Mist
            weatherType = 'Mist';
            break;
        case 'fog':
            body.style.backgroundColor = '#BEBEBE'; // Gray for Fog
            weatherType = 'Fog';
            break;
        case 'clear sky':
            body.style.backgroundColor = '#1E90FF'; // Dodger Blue for Clear Sky
            weatherType = 'Clear Sky';
            break;
        case 'overcast clouds':
            body.style.backgroundColor = '#696969'; // Dim Gray for Overcast Clouds
            weatherType = 'Overcast Clouds';
            break;
        default:
            body.style.backgroundColor = '#2F4F4F'; // Dark Slate Gray for Default
            weatherType = 'Unknown Weather';
            break;
    }

    weatherDisplay.textContent = `Weather: ${weatherType}`;
}

const weather = 'clear'; 
setBackgroundBasedOnWeather(weather);
