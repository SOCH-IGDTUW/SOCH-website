const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');
const contact = require('./routes/contact');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("home")
});

app.get("/writing", function(req,res){
    res.render("writing-gallery")
});
app.get("/art", function(req,res){
    res.render("art-gallery")
});
app.get("/event", function(req,res){
    res.render("event-gallery")
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

app.post("/contact", contact.form);
// const PORT = process.env.PORT || 3001
const PORT = 3001
app.listen(PORT, function(){
    console.log(`server stated on port ${PORT}`)
})