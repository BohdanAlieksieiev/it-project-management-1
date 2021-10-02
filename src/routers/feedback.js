const express = require('express')
const Feedback = require('../model/feedback')
const router = express.Router()

router.get('/', function (req, res, next) {
    res.status(200).send('Hello world');
});

router.post('/form', async function (req, res, next) {
    const feedback = new Feedback(req.body)
    console.log(req.body)
    feedback.save().then(() => {
        res.status(201).send(feedback)
    }).catch((err) => {
        res.status(401).send(err.message)
    })

});

module.exports = router;