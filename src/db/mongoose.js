const mongoose = require('mongoose')

var conn = 'mongodb+srv://root:root@cluster0.4d9i7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(conn, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})