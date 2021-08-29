const sgMail = require('@sendgrid/mail')
const config = require('../config')

const sendgridAPIKey = config.SENDGRID_APIKEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({ 
        to: email, 
        from: 'whuang@viglobal.com', 
        subject: 'Thanks for joining in!', 
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({ 
        to: email, 
        from: 'whuang@viglobal.com', 
        subject: 'Sorry to see you go!', 
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail, sendCancelationEmail
}