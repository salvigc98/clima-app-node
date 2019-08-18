const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=87e9813bd9c206f830310e013ae4b5a9&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
};