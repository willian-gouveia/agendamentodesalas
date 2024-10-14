require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(express.json());

var corsOptions = { origin: "http://localhost:8080"};
app.use(cors(corsOptions));

const professorRouter = require('./routes/professorRoutes');
const cursoRouter = require('./routes/cursoRoutes');

const PORT = process.env.PORT || 8080;

app.use(professorRouter);
app.use(cursoRouter);


app.listen(PORT, () => {
  console.log(`O servidor esta rodando na porta: ${PORT}.`);
});
