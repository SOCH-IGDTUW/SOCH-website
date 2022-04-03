require('dotenv').config();
const nodemailer = require("nodemailer");

// mailer template
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const mailOptions = {
  from: "soch.igdtuw@gmail.com",
  to: "anshigautam130@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

exports.form = (req, res) => {
  const mail = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: req.body.subject,
    text: `${req.body.name} <${req.body.email}> \n${req.body.message}`,
  };
  console.log(mail);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
