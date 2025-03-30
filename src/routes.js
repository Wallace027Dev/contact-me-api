const url = require("url");
const { sendEmail } = require("./utils/sendEmail");

const routes = async (req, res) => {
  const URL = url.parse(req.url, true);

  if (req.method === "GET" && URL.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Olá mundo. Você está na página inicial</h1>");
    return;
  }

  if (req.method === "POST" && URL.pathname === "/send-email") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const { name, email, whatsapp, message } = JSON.parse(body);

        await sendEmail(name, email, whatsapp, message);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: true,
            message: "Email enviado com sucesso!"
          })
        );
      } catch (error) {
        console.error("Erro ao enviar email:", error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: false,
            message: "Erro ao enviar email",
            error: error
          })
        );
      }
    });

    return;
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>Página não encontrada</h1>");
};

module.exports = routes;
