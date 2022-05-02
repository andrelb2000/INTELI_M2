
const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3023;
var contador = 0;
app.use(express.static("../frontend/"));

app.get('/conta', (req, res) => {
  contador +=1;
	res.write("<h1> Chamando servidor - Contador = </h1> <h3>");
<<<<<<< HEAD
  res.write("<a href=\"http://127.0.0.1:3023/conta\">");
  res.write("<input type=\"button\" value=\"Vai Servidor\" />");
  res.write("</a>");
  res.write(String(contador));
	res.end("</h3>");
=======
  res.write(String(contador)+"</h3>");

  res.write("<p> <a href=\"http://127.0.0.1:3023/conta\">");
  res.write("<input type=\"button\" value=\"Vai Servidor\" />");
  res.write("</a>");   
	res.end("");
>>>>>>> 7081282f1879bb530df872304573efaff28dc696
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});