const express = require('express');
const app = require();

app.use(express.json()); // to understand the json format data
app.use(express.urlencoded({ extended: true })); //to understand urlencoded data