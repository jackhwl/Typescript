// CRUD Create read update delete operation

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.error('Unable to connect to database!', error)
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({ 
    //     name: 'Wenlin', 
    //     age: 27 
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').insertMany([
    //     { name: 'Jen', age: 28}, 
    //     { name: 'Peter', age: 29}
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result)
    // })

    db.collection('tasks').insertMany([
        { description: 'task one', completed: true}, 
        { description: 'task two', completed: false}, 
        { description: 'task three', completed: true}, 
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents')
        }

        console.log(result)
    })
})