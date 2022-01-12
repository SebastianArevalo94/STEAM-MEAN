const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const database = require('./database');

app.use(morgan("dev"));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use("/api",require("./routes/user.routes"))

app.listen(port,()=>{
    console.log('App running on port',port)
})