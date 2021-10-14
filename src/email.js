const nodemailer = require('nodemailer');
const keys = require('./db/keys');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: keys.email.box,
        pass: keys.email.password
    }
});

// ${data.map( item => item.name)}
exports.sendEmail = (recipient, host, hashKey) => {

    const mailOptions = {
        from: keys.email.box,
        to: recipient,
        subject: `Дані із форми`,
        html: `<h1>Усі дані із заповненої форми!</h1><a href="${host}/form/${hashKey}">Посилання на форму -></a>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return "An error has been occurred. Please, try again later";
        } else {
            return "Confirmation letter is on the way!"
        }
    });
}
