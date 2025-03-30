const http = require("http");
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(routes);
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
