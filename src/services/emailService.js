const transporter = require("../config/emailConfig");

class EmailService {
  sendEmail = async (name, email, message) =>
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Novo contato do site",
      text: `
          Olá, ${name}!\n
          ${message}`
    });
}

module.exports = EmailService;
