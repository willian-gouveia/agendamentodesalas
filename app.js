require('dotenv').config() // Para usar as variaveis de ambiente
const express = require('express');
//const morgan = require('morgan');
const db = require('./models');
db.connect();
const middleware_cors = require('./middleware/cors');//Cabeçalhos, métodos e origens predefinidos para todas as solicitações globalmente
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());

const usuarioRouter = require('./routes/usuarioRoutes');
const professorRouter = require('./routes/professorRoutes');
const cursoRouter = require('./routes/cursoRoutes');
const agendamentoRouter = require('./routes/agendamentoRoutes');

app.use(middleware_cors.allowAll);

app.use(usuarioRouter);
app.use(professorRouter);
app.use(cursoRouter);
app.use(agendamentoRouter);

app.listen(PORT, () => {
  console.log(`O servidor esta rodando na porta ${PORT}.`);
});


