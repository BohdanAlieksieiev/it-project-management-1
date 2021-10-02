// const request = require("request")
// const hbs = require('hbs')

const express = require('express')
const fs = require('fs');
var cors = require('cors')
// const mongoose = require('mongoose')
const validator = require('validator')
const jsonParse = express.json()
// MODEL
require('./db/mongoose')
require('./model/feedback')

const Feedback = require('mongoose').model('Feedback')
const FeedbackRouter = require('./routers/feedback')

let app = express();

const middleware = [
    cors(),
    express.json(),
    FeedbackRouter
]

app.use(middleware);

app.listen(3000, () => { // запуск на порті
    console.log("Example app listening on port 3000");
});