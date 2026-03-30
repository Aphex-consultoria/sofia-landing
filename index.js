const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/privacidade', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'privacidade.html'));
});

app.get('/termos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'termos.html'));
});

app.get('*', (req, res) => {
  // Não devolver index.html para arquivos estáticos inexistentes (evita HTML no lugar da imagem)
  if (path.extname(req.path)) {
    return res.status(404).end();
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sofia Landing rodando na porta ${PORT}`));
