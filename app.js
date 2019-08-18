const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then((result) => {
//     }).catch((err) => {
//         console.log(err);
//     });

// clima.getClima(40.419998, -3.700000)
// .then(console.log)
// .catch( err => console.log(err));

const getInfo = async (direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `la temperatura de ${ coordenadas.direccionResp } es de ${ temperatura }`;        
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);