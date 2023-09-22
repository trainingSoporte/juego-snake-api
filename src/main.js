const express = require('express');
const cors = require('cors');
const userRoutes = require('./users/users.routes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/v1/users',userRoutes);

module.exports = {app};