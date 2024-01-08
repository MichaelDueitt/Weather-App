document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '068d0ffb05msh67bc2d25ae27f55p117387jsnf4aef62f3f23'
    const apiUrl = 'dark-sky.p.rapidapi.com';

     // Get user's location (you may use other methods to get the location)
     navigator.geolocation.getCurrentPosition(success, error);

     function success(position) {
        const {latitude, longitude} = position.coords;
        const url = `${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => console.error('Error fetching weather data', error));
     }

     function error() {
        console.error('unable to retrieve your location');
     }

     function displayWeather(data) {
        
     }
})