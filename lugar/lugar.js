const axios = require('axios');

const getLugarLatLng = async (direccion) => {

const encodedUrl = encodeURI(direccion);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
    timeout: 1000,
    headers: {'X-RapidAPI-Key': '88858465e5mshc3dddb58e7381bep178bf7jsn1add67ceeaa3'}
  });

const respuesta = await instance.get();
     
if(respuesta.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${ direccion }`);
}

const data = respuesta.data.Results[0];
const direccionResp = data.name;
const lat = data.lat;
const lng = data.lon;

return {
    direccionResp,
    lat,
    lng
};
};

module.exports = {
    getLugarLatLng
};

