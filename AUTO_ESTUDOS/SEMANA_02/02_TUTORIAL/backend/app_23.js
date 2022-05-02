
const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3023;
var contador = 0;
app.use(express.static("../frontend/"));

app.get('/conta', (req, res) => {
  contador +=1;
	res.write("<h1> Chamando servidor - Contador = </h1> <h3>");
  res.write("<a href=\"http://127.0.0.1:3023/conta\">");
  res.write("<input type=\"button\" value=\"Vai Servidor\" />");
  res.write("</a>");
  res.write(String(contador));
	res.end("</h3>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});