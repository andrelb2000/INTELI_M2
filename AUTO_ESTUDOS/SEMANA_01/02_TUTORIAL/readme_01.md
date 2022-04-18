Etapa 0
Descrição

Essa etapa tem por objetivo testar a instalação do Node.js e verificar se está funcionando corretamente.
Instruções

    Criar um arquivo texto em uma pasta e salvar com o nome app.js.

    Copiar e colar o conteúdo abaixo nesse arquivo.

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

    Abrir o promt de comando (Windows) ou o Terminal (Mac) nessa pasta e digitar:

node app.js

    Abrir o Chrome (ou outro navegador) e digitar:

http://127.0.0.1:3000/

    Se tudo estiver correto, vai aparecer Hello World.
