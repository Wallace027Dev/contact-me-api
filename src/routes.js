const path = require("path");
const fs = require("fs");
const url = require("url");
const swaggerUiPath = require("swagger-ui-dist").absolutePath();
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

  if (req.method === "GET" && URL.pathname.startsWith("/api-docs")) {
    let filePath;
    if (URL.pathname === "/api-docs") {
      filePath = path.join(swaggerUiPath, "index.html");
    } else {
      filePath = path.join(
        swaggerUiPath,
        URL.pathname.replace("/api-docs/", "")
      );
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Arquivo não encontrado</h1>");
        return;
      }

      let contentType = "text/html";
      if (filePath.endsWith(".js")) contentType = "application/javascript";
      if (filePath.endsWith(".css")) contentType = "text/css";

      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    });
    return;
  }

  // Servir a documentação Swagger JSON
  if (req.method === "GET" && URL.pathname === "/swagger.json") {
    const swaggerPath = path.join(__dirname, "swagger.json");
    const swaggerFile = fs.readFileSync(swaggerPath, "utf8");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(swaggerFile);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>Página não encontrada</h1>");
};

module.exports = routes;
