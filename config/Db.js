const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const main = async ()=>{
    await mongoose.connect(process.env.MONGODB_URL)
}

module.exports = {main}