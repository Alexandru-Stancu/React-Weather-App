var axios = require('axios');

// const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/find?&units=metric&appid=62c62d322b8ab10067ae32de48ef9d24';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&appid=62c62d322b8ab10067ae32de48ef9d24&units=metric`;
        
        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}