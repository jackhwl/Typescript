require('../src/db/mongoose')
const User = require('../src/models/user')

//61193ebd2b300f3a28aa59fa

// User.findByIdAndUpdate('611a91e3d75fda5a28c665f9', { age: 1})
// .then((user => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// })).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments( { age })
    return count
}

updateAgeAndCount('6119cacc15dd911b08def712', 2).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})