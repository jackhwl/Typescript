const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
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

app.get('/help/*', (req, res) => {
    res.render('404', {title: '404', name: 'Wenlin', errorMessage: 'Help article not found'})
})

app.get('*', (req, res) => {
    res.render('404', {title: '404', name: 'Wenlin', errorMessage: 'Page not found'})
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})