const mongoose = require('mongoose')

const DB = "Films"
mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`).then(() => {
    console.log(`connection is setup successfully (mongodb://127.0.0.1:27017/${DB})`)
}).catch((error) => {
    console.log(`connection is failed:\n${error}`)
})