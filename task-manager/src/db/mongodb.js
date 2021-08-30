// CRUD Create read update delete operation on mongodb without mongoose

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

    // db.collection('users').findOne({ _id: ObjectId("6117f4ab40bc1cf9bafa1167")}, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to fetch document')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').find({ age: 27}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27}).count((error, count) => {
    //     console.log(count)
    // })

    // const updatePromise = db.collection('users').updateOne({_id: new ObjectId("6117ef232ba7e242bb056b6e")}, { $set: { name: 'Huang'}})
    // updatePromise.then(result => { console.log(result) })
    // .catch((error) => {
    //     console.error(error)
    // })

    // db.collection('users').updateOne({_id: new ObjectId("6117ef232ba7e242bb056b6e")}, { $inc: { age: 1}})
    // .then(result => { console.log(result) })
    // .catch((error) => {
    //     console.error(error)
    // })

    // db.collection('tasks').updateMany({completed: true}, { $set: { completed: false}})
    // .then(result => { console.log(result) })
    // .catch((error) => {
    //     console.error(error)
    // })

    // db.collection('users').deleteMany({age: 27})
    // .then(result => { console.log(result) })
    // .catch((error) => {
    //     console.error(error)
    // })

    db.collection('users').deleteOne({age: 28})
    .then(result => { console.log(result) })
    .catch((error) => {
        console.error(error)
    })
})