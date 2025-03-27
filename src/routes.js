const url = require("url");

exports.routes = (req, res) => {
  const URL = url.parse(req.url, true);

  if (req.method === "GET" && URL.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Olá mundo. Você está na página inicial</h1>");
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>Página não encontrada</h1>");
};
