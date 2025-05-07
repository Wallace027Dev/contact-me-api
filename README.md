# Contact Us API

## 📄 Descrição

A **Contact Us API** é uma API simples para envio de e-mails de contato. Permite que usuários enviem mensagens para um endereço de e-mail especificado, utilizando SMTP. Também oferece uma documentação interativa via Swagger UI.

---

## 🔗 Endpoints

### `GET /`

- **Descrição:** Retorna uma mensagem de boas-vindas.
- **Resposta de sucesso (200):**
  ```html
  <h1>Olá mundo. Você está na página inicial</h1>
  ```

---

### `POST /send-email`

- **Descrição:** Envia um e-mail com base nos dados fornecidos.
- **Exemplo de requisição:**
  ```json
  {
    "to": "destinatario@example.com",
    "subject": "Teste",
    "message": "Olá, este é um teste."
  }
  ```

- **Resposta de sucesso (200):**
  ```json
  {
    "success": true,
    "message": "Email enviado com sucesso!"
  }
  ```

- **Resposta de erro (400 ou 500):**
  ```json
  {
    "success": false,
    "message": "Descrição do erro"
  }
  ```

---

### `GET /api-docs`

- **Descrição:** Exibe a interface de documentação interativa (Swagger UI).

---

### `GET /swagger.json`

- **Descrição:** Retorna o arquivo JSON da especificação OpenAPI.

---

## 🚀 Funcionalidades

- Envio de e-mails com nome, e-mail e mensagem.
- Suporte a CORS para integração com frontends.
- Documentação interativa acessível via Swagger UI.

---

## 🌐 Servidores

- **Produção:** [https://contact-me-api-ten.vercel.app](https://contact-me-api-ten.vercel.app)
- **Local:** [http://localhost:8000](http://localhost:8000)

---

## ⚙️ Como Executar

### Pré-requisitos

- Node.js instalado
- Arquivo `.env` com:
  ```
  EMAIL_USER=seu-email
  EMAIL_PASS=sua-senha
  PORT=8000
  ```

### Passos

```bash
git clone https://github.com/Wallace027Dev/contact-us-api.git
cd contact-us-api
npm install
npm start
```

Acesse em: `http://localhost:8000`

---

## 🛠 Tecnologias Utilizadas

- **Node.js** – Plataforma principal
- **Nodemailer** – Envio de e-mails via SMTP
- **dotenv** – Variáveis de ambiente
- **Swagger UI** – Documentação interativa

---

## 🗂 Estrutura do Projeto

```
src/
├── config/
│   └── emailConfig.js           # Configuração do transporte SMTP
├── controllers/
│   └── emailController.js       # Lógica de envio de e-mail
├── services/
│   └── emailService.js          # Serviço de envio de e-mail
├── utils/
│   ├── parseRequestBody.js      # Utilitário para parse do corpo da requisição
│   └── sendJsonResponse.js      # Utilitário para envio de respostas JSON
├── routes.js                    # Definição das rotas da API
├── server.js                    # Inicialização do servidor
└── swagger.json                 # Especificação OpenAPI
```

---

## 🚀 Deploy

Configurado para deploy na [Vercel](https://vercel.com/). O arquivo `vercel.json` define as regras de build e roteamento.

---

## 📜 Licença

Licenciado sob a **ISC License**. Veja o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido por **Wallace Vieira** – Desenvolvedor Fullstack & entusiasta de jogos. 🎮
