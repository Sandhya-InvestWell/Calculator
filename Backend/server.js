const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const router = require('./route');

const app = express();
const Port = 8000;
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


app.use('/auth', router);

app.listen(Port, ()=>{
    console.log(`Listening on port ${Port}`);
})
