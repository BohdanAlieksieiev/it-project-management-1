const nodemailer = require('nodemailer');
const keys = require('./db/keys');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: keys.email.box,
        pass: keys.email.password
    }
});

exports.sendEmail = (host, recipient, confirmationLink) => {
    const mailOptions = {
        from: keys.email.box,
        to: recipient,
        subject: `Confirm your email`,
        html: `<h1>Welcome to Anvil Questify!</h1> <p>Please confirm your email via link below</p><a href="${host}/auth/email/${confirmationLink}">Confirm account -></a>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return "An error has been occurred. Please, try again later";
        } else {
            return "Confirmation letter is on the way!"
        }
    });
}
