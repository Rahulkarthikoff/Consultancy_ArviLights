const nodeMailer = require("nodemailer");
require("dotenv").config({ path: "./config/config.env" });


const sendEmail = async (options) => {

  console.log(`host ${process.env.SMTP_HOST}`);
  console.log(`port: ${process.env.SMTP_PORT}`);
  console.log(`port: ${process.env.SMTP_MAIL}`);
  console.log(`port: ${process.env.SMTP_PASSWORD}`);
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: false, // optional if using host/port
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"ArviLights" <${process.env.SMTP_MAIL}>`,
    to: options.email,
    subject: options.subject,
    text: `
    Hi ${options.email},

    ${options.message}

    To reset your password, click the following link:
    ${options.resetLink}

    If you did not request this, please ignore this email.

    Thanks,
    ArviLights Team
    `,
  };

  await transporter.sendMail(mailOptions);
};


module.exports = sendEmail;
