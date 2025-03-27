const http = require("http");

const routes = require("./src/routes");

const server = http.createServer(routes);
server.listen(8000, () => console.log("Server is running on port 8000"));
