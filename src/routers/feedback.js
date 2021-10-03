const express = require('express')
const Feedback = require('../model/feedback')
const email = require('../email')
const router = express.Router()
const sendEmail = ["faviyiy365@carpetd.com"]

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

    await sendEmail.map( item => {
        email.sendEmail(item, feedback);
    })
    
 
    feedback.save().then(() => {
        res.send(feedback)
    }).catch((err) => {
        res.status(401).send(err.message)
    })

    res.send('Hello world');
});

module.exports = router;