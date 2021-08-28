const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({ 
    to: 'jackhwl@hotmail.com', 
    from: 'whuang@viglobal.com', 
    subject: 'This is a test', 
    text: 'TGIF'
})