// Import required modules
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const log = console.log;

// Set up Express middleware and configurations
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// Route to display all files
app.get('/', (req, res)=>{
    fs.readdir(`./files`, function(err, files){
        res.render('index', { files: files});
    })
});

// Route to create a new file
app.post('/create', (req, res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        if(err){log(err.stack)};
        res.redirect('/');

    });
})  

// Start the server on port 3000
app.listen(3000);