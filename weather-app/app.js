const request = require('request');
const { encode } = require('pluscodes');

const url = 'http://api.weatherstack.com/current?access_key=3c909cfc9d235e3eb62ae510f55442f7&query=43.811,-79.816'

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid2VubGluaHVhbmciLCJhIjoiY2tydXZrM2t5MDBvbzJ2bnQwaWNtcHRxNCJ9.jdc168FYJ521bnRKCaKfJA&limit=1'

request({url: geoUrl, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connecto to location service!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location!')
    } else {
        //const data = JSON.parse(response.body)
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        const pluscodes = encode({ latitude, longitude })
        console.log(latitude, longitude)
        console.log(pluscodes)
    }
})

// request({url, json: true}, (error, response) => {
//     //const data = JSON.parse(response.body)
//     console.log(response.body.current)
// })
