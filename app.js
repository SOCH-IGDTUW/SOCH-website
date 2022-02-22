const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("home")
});

app.get("/gallery", function(req,res){
    res.render("gallery")
});

app.get("/events", function(req,res){
    res.render("events")
});

app.get("/team", function(req,res){
    res.render("team")
});

app.get("/contact", function(req,res){
    res.render("contact")
});

app.get("/calendar", function(req,res){
    res.render("calendar")
});

app.listen(3000, function(){
    console.log("server stated on port 3000")
})