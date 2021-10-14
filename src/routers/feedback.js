const express = require('express')
const Feedback = require('../model/feedback')
const email = require('../email')
const md5 = require('md5');
const router = express.Router()
const sendEmail = ["rus.chumak.1999@mail.ru", "bohdan26012000@gmail.com", "pavlikbogdan22@gmail.com"] // , "rus.chumak.1999@mail.ru", "bohdan26012000@gmail.com", "pavlikbogdan22@gmail.com"

router.get('/', async function (req, res) {
    res.send('Hello world');
});

router.post('/form', async function (req, res) {
    const feedback = new Feedback({
        ...req.body,
        hashKey: md5(new Date() + req.body.email)
    })

    await feedback.save().then(() => {
        sendEmail.map( item => {
            email.sendEmail(item, req.headers.origin, feedback.hashKey);
        })
        email.sendEmail(feedback.email, req.headers.origin, feedback.hashKey);
        res.send(feedback)
    }).catch((err) => {
        res.status(401).send(err.message)
    })
});

router.get('/form/:hashKey', async function (req, res) {
    const { hashKey } = req.params;
    const userForm = await Feedback.findOne({hashKey: hashKey}, {
        hashKey: true,
        name: true,
        email: true,
        answers: true,
    });
    console.log(userForm);
    if( userForm ) res.status(200).send(userForm)
    else res.status(404).send("User form not found!")
});

module.exports = router;