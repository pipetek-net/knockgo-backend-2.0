const express = require('express');
const cors = require('cors');
const db = require('./database/db');

const controllers = require('./controllers');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/user/:id', controllers.getUserById);
app.post('/register', controllers.register);
app.post('/login', controllers.login);

const port = 3000;

app.listen(port, () => {
    console.log(`Backend funcionando en  ${port}`);
    db();
});

module.exports = app;