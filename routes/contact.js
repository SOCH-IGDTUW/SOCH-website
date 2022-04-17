require('dotenv').config();
const SMTPClient = require("emailjs").SMTPClient;


// mailer template
const client = new SMTPClient({
	user: process.env.EMAIL,
	password: process.env.PASSWORD,
	host: 'smtp.your-email.com',
	ssl: true,
  tls: false
});

exports.form = (req, res) => {
  const mail = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: req.body.subject,
    name: req.body.name,
    text: `Name: ${req.body.name} <${req.body.email}> \nMessage: ${req.body.message}`,
  };
  console.log(mail);
  client.send({
    text: mail.text,
    from: mail.from,
    to: mail.to,
    subject: mail.subject
  }, (err, msg) =>{
    console.log(err || msg);
  })

  emailjs.send("service_nnipceo","template_u54ppkg", {
    from_email: mail.from,
    message: mail.message,
    from_name: mail.name,
    subject: mail.subject
  });
};
