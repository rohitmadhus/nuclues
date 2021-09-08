const express = require('express');
const env = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./server/database/connection');

const app = express();

env.config({path:'config/server-config.js'})
const PORT = process.env.PORT || 8080

//log request
app.use(morgan('tiny'));

//parse request to body-parser
//need to run before routes command
app.use(express.json());

//set view engine
app.set("view engine","ejs");
//app.set("views",path.resolve(__dirname,"views/ejs"))

connectDB();


app.use('/',require('./server/routes/router'))



app.listen(3000,()=>{console.log('server running')});

