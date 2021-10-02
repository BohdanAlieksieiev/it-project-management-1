const mongoose = require('mongoose')

var conn = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(conn, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Userschema = { // схема 
    firstName: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
}


const User = mongoose.model('User', Userschema) // модель

let user1 = new User({firstName: "Alex", age: 39}) // екземпляр

user1.save().then(() => {
    console.log("Successful");
}).catch((err) => {
    console.log(err.message);
    
}) // зберігаємо! проміс