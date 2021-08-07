const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {title: 'weather app', name: 'Wenlin'})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'about me', name: 'Wenlin'})
})

app.get('/help', (req, res) => {
    res.render('help', {title: 'help me', name: 'Wenlin'})
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})