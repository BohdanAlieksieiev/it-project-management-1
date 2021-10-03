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
exports.sendEmail = (recipient, data) => {
    const mailOptions = {
        from: keys.email.box,
        to: recipient,
        subject: `Feedback`,
        html: `
        <table>
        <tr>
          <td>Name</td>
          <td>${data.name}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>${data.email}</td>
        </tr>
        ${ data.answers.map( item => {
            return `
            <tr>
                <td>${item.question}</td>
                <td>${item.answer}</td>
            </tr>
          `
        })}
      </table>
      
      <style>
          table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
          }
      
          td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
          }
      
          tr:nth-child(even) {
          background-color: #dddddd;
          }
      </style>
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return "An error has been occurred. Please, try again later";
        } else {
            return "Confirmation letter is on the way!"
        }
    });
}
