const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String, 
        required: true,
        trim: true
    },
    password: {
        type: String, 
        required: true,
        trim: true,
        minLength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password') >= 0) {
                throw new Error('Password can not contain "password"')
            }
        }
    },
    email: {
        type: String, 
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }, 
    age: { 
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
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

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: { 
        type: Boolean,
        default: false
    }
})

const task1 = new Task({
    description: 'task one', 
    completed: false
})

task1.save().then(() => {
    console.log(task1)
}).catch((err) => {
    console.error('Error!', err)
})