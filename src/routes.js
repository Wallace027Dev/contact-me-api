const url = require("url");
const emailController = require("./controllers/emailController");

const routes = async (req, res) => {
  const URL = url.parse(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && URL.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Olá mundo. Você está na página inicial</h1>");
    return;
  }

  if (req.method === "POST" && URL.pathname === "/send-email") {
    emailController.sendEmail(req, res);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>Página não encontrada</h1>");
};

module.exports = routes;
