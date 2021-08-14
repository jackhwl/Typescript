// CRUD Create read update delete operation

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId();
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.error('Unable to connect to database!', error)
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({ 
    //     name: 'Jack', 
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

    // db.collection('tasks').insertMany([
    //     { description: 'task one', completed: true}, 
    //     { description: 'task two', completed: false}, 
    //     { description: 'task three', completed: true}, 
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result)
    // })

    db.collection('users').findOne({ _id: ObjectId("6117f4ab40bc1cf9bafa1167")}, (error, result) => {
        if (error) {
            return console.log('Unable to fetch document')
        }

        console.log(result)
    })

    db.collection('users').find({ age: 27}).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({ age: 27}).count((error, count) => {
        console.log(count)
    })
})