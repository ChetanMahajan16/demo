const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const url = "mongodb://localhost:27017/test"

mongoose.connect(url)
.then(()=> console.log('connected!'));

app.get('/',(req,res)=> {
    res.send('hello Akrypt');
})

app.get('/About',(req,res)=> {
    res.send('welcome to about');
})

app.get('/contact',(req,res)=> {
    res.send('welcome to contact');
})

app.get('/social Media',(req,res)=> {
    res.send('welcome to social Media');
})

app.get('/Services',(req,res)=>{
    res.send('Welcome to our services');
})

 app.listen(port,()=>{
    console.log(`server is runing on port ${port}`);
 })