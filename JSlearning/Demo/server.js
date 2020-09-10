const express = require('express');
const {ROUTE_CONSTANTS} = require('./helpers/routeConstants');
const bodyParser = require('body-parser');

const app = express();  

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get(ROUTE_CONSTANTS.DEFAULT, function(req, res){
    res.sendFile(__dirname + '/pages/login.html');
});

app.get(ROUTE_CONSTANTS.GET_LOGIN, function(req, res){
    res.sendFile(__dirname + '/pages/login.html');
});

app.get(ROUTE_CONSTANTS.GET_REGISTER, function(req, res){
    res.sendFile(__dirname + '/pages/register.html');
});

app.get(ROUTE_CONSTANTS.GET_PRODUCTS, function(req, res){
    res.sendFile(__dirname + '/pages/productlist.html');
});

app.post(ROUTE_CONSTANTS.POST_REGISTER, function(req, res){
    res.sendFile(__dirname + '/pages/login.html')
});

app.post(ROUTE_CONSTANTS.POST_LOGIN, function(req, res){
  res.sendFile(__dirname + '/pages/productlist.html');
})

app.post(ROUTE_CONSTANTS.POST_DEFAULT, function(req, res){
    res.sendFile(__dirname + '/pages/productlist.html');
})

app.listen(3000);