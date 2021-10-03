const express = require('express')
var cors = require('cors')
const jsonParse = express.json()
const path = require('path');
require('./db/mongoose')
require('./model/feedback')
const FeedbackRouter = require('./routers/feedback')

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
const port = process.env.PORT || 8080;
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
