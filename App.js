const express = require('express');
const cors = require('cors');
const db = require('./database/db');

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.listen(port, () => {
    console.log(`Backend funcionando en  ${port}`);
    db();
});

module.exports = app;