const EmailService = require("../services/emailService");
const sendJsonResponse = require("../utils/sendJsonResponse");
const parseRequestBody = require("../utils/parseRequestBody");

class EmailController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.emailService = new EmailService();
  }

  sendEmail = async () => {
    try {
      const { name, email, message } = await parseRequestBody(this.req);
      await this.emailService.sendEmail(name, email, message);

      sendJsonResponse(this.res, 200, {
        success: true,
        message: "Email enviado com sucesso!"
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      sendJsonResponse(this.res, 500, {
        success: false,
        message: error.message
      });
    }
  };
}

module.exports = EmailController;
