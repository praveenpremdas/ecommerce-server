const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
require('./utils/db');
const routes = require('./Routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(mongoSanitize());
app.use('/static', express.static(__dirname + '/images')); // files in the folder image is public (http://localhost:5000/static/file_name_of_anythimg in the folder images)

app.use('/api', routes);
app.get('*', (req, res) => {
    res.status(404).send({
        status: 'Not Found',
    });
});

module.exports = app;
