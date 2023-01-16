let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mymail@gmail.com',
      pass: 'generated password'
    }
  });
  
  let mailOptions = {
    from: 'mymail@gmail.com',
    to: 'receiverOne@gmail.com, receiverTwo@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was not easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });