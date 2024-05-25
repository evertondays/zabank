const port = 3000;

const path = require('path');
const express = require('express');

const frontend = express();

frontend.use('/pages', express.static(path.join(__dirname, '..', '..', 'pages')));
frontend.use('/js', express.static(path.join(__dirname, '..', '..', 'js')));
frontend.use('/styles', express.static(path.join(__dirname, '..', '..', 'styles')));
frontend.use('/assets', express.static(path.join(__dirname, '..', '..', 'assets')));

frontend.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

frontend.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Front-end rodando em http://localhost:" + port);
});
