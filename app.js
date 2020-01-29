const express = require('express')
const bodyParser = require('body-parser')
const alert = require('alert-node')



if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}



var app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
    //--- http server code  begins--
    //var http = require('http');
    //var httpServer = http.createServer(app);
    //httpServer.listen(80);
    // // ends

app.use(bodyParser.urlencoded({ extended: true }))

//Seeding

// var seedDB= function(){
//     User.remove({},function(err){
//         if(err){
//             console.log(err);
//         }
//     });
// }
// seedDB();


// start of get request

//ThunderMarch
var tmroutes = require('./thundermarch.js')
app.use("/thundermarch", tmroutes)

//Indie Unplugges
var indieroutes = require('./indieunplugged.js')
app.use("/indieunplugged", indieroutes)

app.get('/participate', (req, res) => {
    res.render('participate', { validate: 1 })
})
app.get('/sponsors', (req, res) => {
    res.render('sponsor')
})
app.get('/munhome', (req, res) => {
    res.render('munhome')
})
app.get('/mungallery', (req, res) => {
    res.render('mungallery')
})
app.get('/munteam', (req, res) => {
    res.render('munteam')
})
app.get('/munregistration', (req, res) => {
    res.render('munregistration')
})
app.get('/gallery', (req, res) => {
    res.render('gallery')
})

app.get('/brochure', (req, res) => {
    res.render('history')
})

app.get('/faq', (req, res) => {
    res.render('faq')
})

app.get('/event', (req, res) => {
    res.render('event')
})

app.get('/campus', (req, res) => {
    res.render('campus')
})
app.get('/reachus', (req, res) => {
    res.render('reachus')
})
app.get('/team', (req, res) => {
    res.render('team')
})

app.get('/database', (req, res) => {
    var name = req.query.name || "NO ONE"
    res.render('database', { customer: name })
})

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/register', (req, res) => {
    res.render('register', { validate: 1 })
})

app.get('/adminlogin', (req, res) => {
    res.render('adminlogin')
})



app.listen(5000, () => {
    console.log('Connected to server')
})