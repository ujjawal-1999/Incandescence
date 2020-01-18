const express = require('express')
const bodyParser = require('body-parser')
var Razorpay = require('razorpay')
const shortid = require('shortid');
const alert = require('alert-node')

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');



const { mongoose } = require('./connect')
const { User } = require('./user.js')
var rzp = new Razorpay({
    key_id: 'own_key', // need to change in payment.ejs
    key_secret: 'own_secret'
})

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

const msg91sms = require('msg91-lib').msg91SMS;
const msg91SMS = new msg91sms('own_key', 'incand', 4, 91);

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('own_key');

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
app.get('/team',(req,res)=>{
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

app.get('/payment', (req, res) => {
    name = req.query.name
    phone = req.query.phonenumber
    email = req.query.email

    localStorage.setItem('email', email)
    localStorage.setItem('name', name)
    localStorage.setItem('number', phone)
    res.render('payment')
        //{name:name,phonenumber:phone,email:email}
})

app.get('/success', (req, res) => {
    var name = localStorage.getItem("name") || req.query.name;
    var id = req.query.id
    res.render('success', { name: name, cust_id: id })
    console.log(localStorage.getItem("name"))
    localStorage.clear()
})

app.get('/admin', (req, res) => {
    res.render('admin')
})

//End of get request

//Start of post request
//to valididate email id
function fun1(req, res, next) {
    var email = req.body.email
    var pos = email.indexOf('@')

    if (pos == -1) {
        res.render('register', { validate: 0 })
    } else {
        if (email.slice(pos + 1, email.length) == "gmail.com" || email.slice(pos + 1, email.length) == "yahoo.com") {
            next()
        } else {
            alert('Email is not valid. Please enter again.')
            res.render('register', { validate: 0 })
        }
    }
}

app.post('/register', fun1, (req, res) => {
    email_id = req.body.email
    User.findOne({email : email_id}, function(err,user){
        if(err) res.redirect('/register')
        if(user){
            alert("There exists a user with that email. Please give a correct email.")
            res.redirect('/register')
            return
        }
    })
    college_id = req.body.college
    if (college_id == "1") {
        phone = req.body.number
        if (phone.length != 10){
            alert('Phone number is not 10 digits. Please Enter Again')
            res.redirect('/register')
        }
        else {
            uniq_id = shortid.generate()
            new User({
                name: req.body.name,
                email: req.body.email,
                institute: "NIT Silchar",
                phonenumber: phone,
                id: uniq_id
            }).save().then((user) => {
                console.log(user)
                res.redirect('/success?name=' + req.body.name + "&id=" + uniq_id)
            })
        }
    } else {
        res.redirect('/payment?name=' + req.body.name + '&email=' + req.body.email + '&phonenumber=' +
            req.body.number + '&institute=others')
    }

})

app.post('/adminlogin', (req, res) => {
    username = req.body.username
    password = req.body.password
    if (username == "admin" && password == "password") {
        res.redirect('/admin')
    } else {
        res.redirect('/adminlogin')
    }
})

app.post('/pay', (req, res) => {
    console.log(req.body)
    const amount = 1000
    name = localStorage.getItem('name')
    email = localStorage.getItem('email')
    phone = localStorage.getItem('number')
    console.log(localStorage.getItem("name"))
    console.log(localStorage.getItem("email"))
    console.log(localStorage.getItem("number"))

    rzp.customers.create({
        name: name,
        email: email,
        fail_existing: '0'
    }).then((data) => {
        console.log(data)
        rzp.orders.create({ amount: amount, currency: "INR", receipt: data.id }).then((order) => {
            console.log("Order Details: ");
            console.log(order);
            console.log(order.id)
            var orderID = order.id;
            rzp.payments.fetch(req.body.razorpay_payment_id).then((response) => {
                console.log("Payment Instance")
                console.log(response)
                rzp.payments.capture(req.body.razorpay_payment_id, response.amount).then((capture) => {
                    uniq_id = shortid.generate()
                    new User({
                        name: name,
                        email: email,
                        institute: "Others",
                        phonenumber: phone,
                        id: uniq_id
                    }).save().then((user) => {
                        console.log(user)
                        res.redirect('/success?id=' + uniq_id)
                    })
                    console.log("Payment Captured Successfully: ")
                    console.log(capture)
                }).catch((error) => {
                    console.log("Failed to capture payment")
                    console.log(error)
                })
            }).catch((error) => {
                console.log("failed to fetch payment")
                console.log(response)
            })
        }).catch((error) => {
            //error
            console.log("Order creation error")
            console.log(error)
            res.redirect('/register')
        })
    }).catch((error) => {
        // error
        console.log("Customer Create Error: ");
        console.log(error);
        res.redirect('/register')
    })

})


app.post('/send', (req, res) => {
    message = req.body.message
    User.find().then((users) => {
        users.map((user) => {
            string = user.phonenumber
            phnumber = string
            console.log(phnumber)

            smsobj = [{
                "message": message,
                "to": [phnumber]
            }]

            args = { sender: 'incand', sms: smsobj }

            msg91SMS.send(args).then((res) => {
                console.log(res)
            }).catch((e) => {
                console.log(e)
                if (e.data) console.log(e.data)
                else console.log(e.message)
            })
            console.log('success')
        })

        users.map((mail_user) => {
            const msg = {
                to: 'abinashdtt45@gmail.com',
                from: 'incand@gmail.com',
                subject: 'Incandescence News Update',
                text: message,

            };
            msg.to = mail_user.email
            sgMail.send(msg);

        })

    })

})

app.post('/check', (req, res) => {
    console.log(req.body.id)
    User.find({ id: req.body.id }, function(err, result) {
        console.log(result.length)
        if (result.length != 0) res.redirect('/database?name=' + result[0].name)
        else res.redirect('/database')
        console.log(result)

    })
})

// End of post request




 app.listen(5000, () => {
     console.log('Connected to server')
 })

