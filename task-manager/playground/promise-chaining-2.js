require('../src/db/mongoose')
const Task = require('../src/models/task')

//61193ebd2b300f3a28aa59fa

// Task.findByIdAndDelete('611a91e3d75fda5a28c665f9').then((task => {
//     console.log(task)
    
//     return Task.countDocuments({ completed: false})
// })).then((result => {
//     console.log(result)
// })).catch((err) => {
//     console.log(err)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('611a928176fa6748589f802a').then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})