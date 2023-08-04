const express = require('express');
const app = express();
const errorHandler = require('./api/middleware/errorHandler');
require('dotenv').config();

const port = process.env.PORT || 6000;

app.use(express.json());


app.use('/api/movies', require('./api/routes/movie.route'));

app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`));