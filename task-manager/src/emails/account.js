const sgMail = require('@sendgrid/mail')
const config = require('../config')

const sendgridAPIKey = config.SENDGRID_APIKEY

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({ 
    to: 'jackhwl@hotmail.com', 
    from: 'whuang@viglobal.com', 
    subject: 'This is a test 2', 
    text: 'testing email from node'
})