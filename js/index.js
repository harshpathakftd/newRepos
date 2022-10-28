const express = require('express');
const app = express();
const port = 8345;


app.get('/' , (req , res)=>{
    res.send('hello from the server');
})
app.listen(port , ()=>{
    console.log(`listening to the port ${port}`);
})