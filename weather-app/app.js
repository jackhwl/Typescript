const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address) return console.error('please provide an address')

geocode(address, (error, data) => {
    if (error) {
        return console.error(error)
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.error(error)
        }

        console.log(data.location, data.pluscodes)
        console.log(forecastData.weather_descriptions, forecastData.temperature)
    })
})

