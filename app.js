const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./models');
db.connect();
const app = express();
app.use(express.json());

var corsOptions = { origin: "http://localhost:8080"};
app.use(cors(corsOptions));

const professorRouter = require('./routes/professorRoutes');
const cursoRouter = require('./routes/cursoRoutes');

const PORT = process.env.PORT || 8080;

app.use(professorRouter);
app.use(cursoRouter);


// set port, listen for requests

app.listen(PORT, () => {
  console.log(`O servidor esta rodando na porta ${PORT}.`);
});
