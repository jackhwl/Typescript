const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Toronto', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(44.1545, -75.4088, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
