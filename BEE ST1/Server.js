const express = require('express')
const app=express();
const mongoose = require('mongoose')

const bookControllers = require('./controllers/bookControllers')
const bookServices=require('./services/bookServices')
const bookRoutes=require('./routes/bookRoutes')

const dB= require('./middlewares/dB');
const book = require('./models/book');

app.use(express.json());
dB.connectToDB();


app.use('/Books',bookRoutes)


app.get('/',(req,res)=>{
    res.send(`Hello`);
})

app.post('/post',(req,res)=>{
    const inputData=req.body;
    const createData=bookData
})

app.listen(4000,()=>{
    console.log(`Server is started in 4000`);
})