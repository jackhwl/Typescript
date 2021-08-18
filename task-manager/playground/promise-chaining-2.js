require('../src/db/mongoose')
const Task = require('../src/models/task')

//61193ebd2b300f3a28aa59fa

Task.findByIdAndDelete('611a91e3d75fda5a28c665f9', { age: 1}).then((task => {
    console.log(task)
    
    return Task.countDocuments({ completed: false})
})).then((result => {
    console.log(result)
})).catch((err) => {
    console.log(err)
})

