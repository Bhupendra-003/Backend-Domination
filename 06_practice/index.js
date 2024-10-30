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

app.get('/file/:filename', (req, res)=>{
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', function(err, filedata){
        res.render('task.ejs', {title: req.params.filename, filedata});
    })
})

// Route to create a new file
app.post('/create', (req, res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('-')}.txt`, req.body.details, function(err){
        if(err){log(err.stack)};
        res.redirect('/');
    });
}) 

// Route to show edit page
app.get('/edit/:filename', (req, res)=>{
    res.render('./edit.ejs', {file: req.params.filename});
})

//post method to handle files edit in backend
app.post('/edit', (req, res)=>{
    fs.rename(`./files/${req.body.title.split(' ').join('-')}.txt`, `./files/${req.body.newTitle.split(' ').join('-')}.txt`, (err)=>{
        if(err) log(err.stack);
        res.redirect('/');
    })
    
})

// Route to delete files
app.get('/delete/:filename', (req, res)=>{
    fs.unlink(`./files/${req.params.filename}`, (err)=>{
        if(err){
            log(err.stack);
        }else{
            res.redirect('/');
        }
    });
})

// Start the server on port 3000
app.listen(3000);