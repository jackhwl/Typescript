const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})


// const me = new User({
//     name: 'Wenlin Huang', 
//     age: 27,
//     password: 'abcdefg',
//     email: 'a@b.com'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.error('Error!', err)
// })

// const task1 = new Task({
//     description: 'task one', 
//     completed: false
// })

// task1.save().then(() => {
//     console.log(task1)
// }).catch((err) => {
//     console.error('Error!', err)
// })