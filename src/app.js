// const request = require("request")
// const hbs = require('hbs')

const express = require('express')
const fs = require('fs');
// const mongoose = require('mongoose')
const validator = require('validator')
const jsonParse = express.json()
// MODEL
require('./db/mongoose')
require('./model/feedback')

const Feedback = require('mongoose').model('Feedback')
const FeedbackRouter = require('./routers/feedback')

let app = express();

app.use(express.json()) // 
app.use(FeedbackRouter)

app.listen(3000, () => { // запуск на порті
    console.log("Example app listening on port 3000");
});