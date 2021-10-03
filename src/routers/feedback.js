const express = require('express')
const Feedback = require('../model/feedback')
const email = require('../email')
const router = express.Router()
const sendEmail = ["faviyiy365@carpetd.com", "rus.chumak.1999@mail.ru", "bohdan26012000@gmail.com"]

router.get('/', async function (req, res) {
    // const arrObject = [{
    //     name: 'Ruslan',
    //     email: 'ruslan.chumak@gmail.com'
    // }]

    // await sendEmail.map( item => {
    //     console.log(item)
    //     email.sendEmail(item, arrObject);
    // })
    // res.render("../views/index.hbs", {
    //     arr: arrObject
    // })

    res.send('Hello world');
});

router.post('/form', async function (req, res) {
    const feedback = new Feedback(req.body)
 
    await feedback.save().then(() => {
        sendEmail.map( item => {
            email.sendEmail(item, feedback);
        })
        res.send(feedback)
    }).catch((err) => {
        res.status(401).send(err.message)
    })
});

module.exports = router;