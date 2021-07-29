const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
// // console.log(bookJSON)

// // const parseData = JSON.parse(bookJSON)
// // console.log(parseData)
// // console.log(parseData.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = "Wenlin Huang"
data.age = 42
const newData = JSON.stringify(data)
fs.writeFileSync('1-json.json', newData)
//console.log(data.title)
//console.log(dataBuffer)
//console.log(dataBuffer.toString())