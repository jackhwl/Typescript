const request = require('request');
const { encode } = require('pluscodes')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoid2VubGluaHVhbmciLCJhIjoiY2tydXZrM2t5MDBvbzJ2bnQwaWNtcHRxNCJ9.jdc168FYJ521bnRKCaKfJA&limit=1'

    request({url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connecto to location service!')
        } else if (response.body.features.length === 0) {
            callback('Unable to find location!')
        } else {
            //const data = JSON.parse(response.body)
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            const location = response.body.features[0].place_name
            const pluscodes = encode({ latitude, longitude })
            callback(undefined, {latitude, longitude, location, pluscodes})
            //console.log(pluscodes)
        }
    })
}

module.exports = geocode