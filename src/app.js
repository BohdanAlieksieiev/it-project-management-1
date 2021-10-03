const express = require('express')
var cors = require('cors')
const jsonParse = express.json()
require('./db/mongoose')
require('./model/feedback')
const FeedbackRouter = require('./routers/feedback')

let app = express();

const middleware = [
    cors(),
    jsonParse,
    FeedbackRouter
]

app.use(middleware);

app.listen(8080, () => {
    console.log("Example app listening on port 8080");
});
