const mongoose = require('mongoose')
let FeedbackSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
})


const Feedback = mongoose.model('Feedback', FeedbackSchema)

module.exports = Feedback
