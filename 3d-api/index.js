const express = require ('express');
const routes = require('./routes/model'); 
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/uploads', express.static('./uploads'));

mongoose.connect(
    'mongodb+srv://admin:admin@web3.hyjge.mongodb.net/models',
    {useUnifiedTopology: true, useNewUrlParser: true},
);

app.use('/', routes); 

const listener = app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`)
})