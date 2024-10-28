const express = require('express')
const app = express();
const path = require('path');

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index.html'))
})

app.all('*',(req,res)=>{
    res.status(400).send('resource note found');
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})

