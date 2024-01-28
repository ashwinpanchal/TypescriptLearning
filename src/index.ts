import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.json("Hello");
});

app.listen(3001, ()=>{console.log("server is running")});

