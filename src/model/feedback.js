const mongoose = require('mongoose')
let FeedbackSchema = new mongoose.Schema({
    text:{
        type:String,
    },
})


const Feedback = mongoose.model('Feedback', FeedbackSchema)

module.exports = Feedback
