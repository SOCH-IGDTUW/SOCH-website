const express = require("express");
const ejs = require("ejs");
const path = require('path');
const mongoose = require('mongoose');
const contact = require('./routes/contact');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

//collections
const Art = require("./models/art")
const Write = require("./models/write")
const EventGallery = require("./models/eventGallery")
const Event = require("./models/event")

app.get("/", function (req, res) {
    res.render("home")
});

app.get("/writing", function (req, res) {
    Write.find({}, function (err, posts) {
        if (!err) res.render("writing-gallery", { posts: posts });
        else console.log(err);
    });
});
app.get("/art", function (req, res) {
    Art.find({}, function (err, arts) {
        if (!err) res.render("art-gallery", { arts: arts });
        else console.log(err);
    });
});
app.get("/event", function (req, res) {
    EventGallery.find({}, function (err, events) {
        if (!err) res.render("event-gallery", { events: events });
        else console.log(err);
    });
});

app.get("/events", function (req, res) {
    Event.find({}, function (err, events) {
        if (!err) res.render("events", { events: events });
        else console.log(err);
    });
});

app.get("/team", function (req, res) {
    res.render("team")
});

app.get("/contact", function (req, res) {
    res.render("contact")
});

app.get("/calendar", function (req, res) {
    res.render("calendar")
});

app.get("/form", function (req, res) {
    res.render("form")
});

app.post("/contact", contact.form);
// const PORT = process.env.PORT || 3001
const PORT = 3001
app.listen(process.env.PORT || PORT, function () {
    console.log(`server stated on port ${PORT}`)
})
