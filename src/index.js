const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const agendaRoutes = require('./routes/agenda');

const app = express();
const port = process.env.PORT || 9000;

//Middleware
app.use(express.json());
app.use('/api', agendaRoutes);

//Routes
app.get('/', (req,res) => {
    res.send('Hola mundo');
});

//Conection DB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conected DB'))
    .catch((err) => console.error(err));

app.listen(port, () => console.log('Server stated on port ' + port));