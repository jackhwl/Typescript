const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=3c909cfc9d235e3eb62ae510f55442f7&query=45,-75'

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (err) => {
    console.error(err)
})
request.end()