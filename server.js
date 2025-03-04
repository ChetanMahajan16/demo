const express = require('express');
const tsc = express();
const port = 5000;

tsc.get('/',(req,res)=> {
    res.send('hello Akrypt');
})

tes.get('/About',(req,res)=>{
    res.send('welcome to about');
})
 tsc.listen(port,()=>{
    console.log(`server is runing on port ${port}`);
 })