const express = require('express')
var cors = require('cors')
const jsonParse = express.json()
require('./db/mongoose')
require('./model/feedback')
const FeedbackRouter = require('./routers/feedback')

let app = express();

const port = process.env.PORT || 3000;
console.log(port);

const middleware = [
    cors(),
    jsonParse,
    FeedbackRouter
]

app.use(middleware);

app.listen(port, () => {
    console.log("Example app listening on port " + port);
});
