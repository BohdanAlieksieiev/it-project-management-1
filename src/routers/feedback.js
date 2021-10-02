const express = require('express')
const Feedback = require('../model/feedback')
const router = express.Router()

router.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send('Hello world');
});

router.post('/form', async function (req, res) {
    const feedback = new Feedback(req.body)
    console.log(req.body)

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    feedback.save().then(() => {
        res.send(feedback)
    }).catch((err) => {
        res.status(401).send(err.message)
    })

});

module.exports = router;