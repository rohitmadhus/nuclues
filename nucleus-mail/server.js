
const express = require('express');
const path = require('path');

const app = express();
const port = 3001;


//Data parsing
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/mail',require('./routes/mailRoute'));
app.get('/',(req,res) => { res.sendFile(path.join(__dirname,'views','index.html'))});


app.listen(port, () => console.log("Connected to nucleus mail server"));