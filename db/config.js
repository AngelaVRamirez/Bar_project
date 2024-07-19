
debugger
const mongoose = require('mongoose')
const mongoUri = process.env.MONGO_URI

const connectDatabase = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect (mongoUri)
        console.log ('database connected')
    } catch(error){
        console.log (error)
    }
}

module.exports = connectDatabase;