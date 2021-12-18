// Implement your web server here

const express = require('express');

const PORT = 80;
const app = express();
const fs = require('fs');
const cors = require('cors');
app.use(cors());

const routes = require('./routes/routes.js')(app, fs);

app.listen(PORT, () => console.log(`App running at http://localhost on port ${PORT}`));