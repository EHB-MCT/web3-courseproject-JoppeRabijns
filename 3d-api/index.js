const express = require ('express');
const routes = require('./routes/model'); 
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use('/uploads', express.static('./uploads'));



mongoose.connect(
    'mongodb+srv://admin:admin@web3.hyjge.mongodb.net/models',
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err) => {
        if (err) return console.log("Error: ", err);
    }
);


app.use('/', routes); 

const listener = app.listen(4000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})