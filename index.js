const express=require('express');
const cors=require('cors');
const courses = require('./data/courses.json');


const app=express();
const port = process.env.PORT || 5000;


app.use(cors())
app.get('/',(req, res)=>{
    res.json('hello world hello')
});

app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.get('/course/:id',(req,res)=>{
    const id = req.params.id;
    const selectCourse = courses.find(course=>course._id===id);
    res.send(selectCourse);
})

app.listen(port,()=>{
    console.log(`app is running ${port}`)
})



// const express = require('express')
// const app = express()
// const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })