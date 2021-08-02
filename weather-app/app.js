const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=3c909cfc9d235e3eb62ae510f55442f7&query=43.811,-79.816'

request({url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})