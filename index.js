const express=require('express');
const app=express();
const cors=require('cors')

const courses = require('./data/courses.json')
app.use(cors())
app.get('/',(req, res)=>{
    res.json('hello world hello')
});

app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.listen(5000,()=>{
    console.log('app is listening')
})