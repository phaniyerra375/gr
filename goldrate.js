function setBackgroundBasedOnWeather(weather) {
    const body = document.body;
    switch (weather) {
        case 'clear':
            body.style.backgroundColor = '#4682B4'; // Steel Blue for Clear Sky
            break;
        case 'few clouds':
            body.style.backgroundColor = '#6A5ACD'; // Slate Blue for Few Clouds
            break;
        case 'scattered clouds':
            body.style.backgroundColor = '#A9A9A9'; // Dark Grey for Scattered Clouds
            break;
        case 'broken clouds':
            body.style.backgroundColor = '#708090'; // Slate Grey for Broken Clouds
            break;
        case 'shower rain':
        case 'rain':
            body.style.backgroundColor = '#4169E1'; // Royal Blue for Rain
            break;
        case 'thunderstorm':
            body.style.backgroundColor = '#2F4F4F'; // Dark Slate Grey for Thunderstorm
            break;
        case 'snow':
            body.style.backgroundColor = '#B0E0E6'; // Powder Blue for Snow
            break;
        case 'mist':
        case 'fog':
            body.style.backgroundColor = '#BEBEBE'; // Gray for Mist or Fog
            break;
        case 'clear sky':
            body.style.backgroundColor = '#1E90FF'; // Dodger Blue for Clear Sky
            break;
        case 'overcast clouds':
            body.style.backgroundColor = '#696969'; // Dim Gray for Overcast Clouds
            break;
        default:
            body.style.backgroundColor = '#2F4F4F'; // Dark Slate Gray for Default
            break;
    }
}
const weather = 'clear'; 
setBackgroundBasedOnWeather(weather);
