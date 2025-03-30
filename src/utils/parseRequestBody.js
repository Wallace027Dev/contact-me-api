const parseRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => (body += chunk.toString()));

    req.on("end", () => {
      try {
        const parsedBody = JSON.parse(body);
        resolve(parsedBody);
      } catch (error) {
        reject(new Error("Erro ao processar o corpo da requisição"));
      }
    });

    req.on("error", (error) => reject(error));
  });
};

module.exports = parseRequestBody;
