const transporter = require("./transporter");

exports.sendEmail = async (name, email, whatsapp, message) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Novo contato do site",
      text: `
        Nome: ${name}\n
        Email: ${email}\n
        Whatsapp: ${whatsapp}\n
        Mensagem: ${message}`
    });

    return info;
  } catch (error) {
    throw new Error(error);
  }
};
