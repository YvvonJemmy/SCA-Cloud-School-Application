constexpress = require ('express');
const dotenv = require ('dotenv');
const morgan = require ('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const express = require('express');


constapp = express();
dotenv.config({ path:'config.env'})

constPORT =process.ENV.PORT||8080

//log request
app.use(morgan('tiny'))

//parser request to bodyparser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/image',express.static(path.resolve(__dirname,"assets/image")))

app.get('/',(req,res)=>{
    res.render("index");
});

app.listen(3000,()=>{console.log('server is running on http://localhost:${PORT}')});