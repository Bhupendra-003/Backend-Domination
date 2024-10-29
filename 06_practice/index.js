const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const log = console.log;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    fs.readdir(`./files`, function(err, files){
        log(files);
        res.render('index', { files: files});
    })
});

app.listen(3000);