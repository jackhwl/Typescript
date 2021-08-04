const request = require('request');
const { encode } = require('pluscodes');
const geocode = require('./utils/geocode')

const url = 'http://api.weatherstack.com/current?access_key=3c909cfc9d235e3eb62ae510f55442f7&query=43.811,-79.816'

geocode('Toronto', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
// request({url, json: true}, (error, response) => {
//     //const data = JSON.parse(response.body)
//     console.log(response.body.current)
// })
