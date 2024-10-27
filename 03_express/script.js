const express = require('express')
const app = express();

// server ke paas koi bhi request aayegi to pehle ye hi chalega
app.use(function(req, res, next){
    console.log('Middle 1');
    next();
})

app.use(function (req, res, next) { // har bar chalega
    console.log('Middle 2');
    next();
})

app.use(function (req, res, next) { //bar bar chalega
    console.log('Middle 3');
    next();
})

// fir ispe aayega agar koi route ni h to vrna usi route pe jayega
app.get('/', function(req, res){
    res.send("champion mera bhupii!!");
});

// jaise ispe
app.get('/profile', function(req, res){
    res.send('aur champion h wo!!');
});

app.get('/about', function(req, res, next){
    return next(new Error('Something went wrong'));
});
app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.status(500).send('Something is wrong');
})


app.listen(3000);
