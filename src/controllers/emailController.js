const emailService = require("../services/emailService");
const sendJsonResponse = require("../utils/sendJsonResponse");
const parseRequestBody = require("../utils/parseRequestBody");

const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = await parseRequestBody(req);
    await emailService.sendEmail(name, email, message);

    sendJsonResponse(res, 200, {
      success: true,
      message: "Email enviado com sucesso!"
    });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    sendJsonResponse(res, 500, {
      success: false,
      message: error.message
    });
  }
};

module.exports = { sendEmail };
