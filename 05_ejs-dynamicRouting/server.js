const log = console.log;
const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/profile/:username', (req, res)=>{ //dynamic route, username is now a variable.
    const username = req.params.username; //params is object which contains variables
    res.send(username);
})

app.get('/profile/:username/:age', (req, res)=>{
    const age = req.params.age; 
    // res.send(req.params);
    res.send(age);
})

app.listen(3000, ()=>{console.log('Server is started!!!');
});