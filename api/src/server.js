const port = 3333;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./controllers/UserController'));

app.listen(port, () => {
    var date = new Date();
    var logDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    console.clear();
    console.log(`O servidor está no ar!\n\n  + url: http://localhost:${port}/\n  + criado por: Alejandro, Eloiza e Everton\n\n-> Última atualização às ${logDate}\n`);
});