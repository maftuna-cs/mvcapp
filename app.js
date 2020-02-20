const express = require("express");//import the express package (installed)
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const productModel = require("./models/room-listing");

const app = express(); //express app object


app.use(express.static('public')); //middleware

app.use(bodyParser.urlencoded({ extended: false })); //parse app


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// routs
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    headingInfo: "Home",
    randomContent: "Home"
  });

});

app.get("/room-listing", (req, res) => {
  res.render("room-listing", {
    title: "Room Listing",
    description: "Room Listing Page",
    products: productModel.getallRooms()

  });
});

app.post("/room-listing",(req,res)=>{

    //When the form is submitted
})

app.get("/user-registration", (req, res) => {

  res.render("user-registration", {
    title: "User Registration",
    headingInfo: "User Registration Page"
  });

});

app.get("/sign-in", (req, res) => {

  res.render("sign-in");

});

app.get("/sign-up", (req, res) => {

  res.render("sign-up");

});

app.post("/sign-up", (req, res) => {

  const errors = {};

  if (req.body.firstName == "") {
    console.log('has error')
    errors.firstName = "Sorry, you must enter first name";

  }

  if (req.body.lastName == "") {
    errors.lastName = "Sorry, you must enter last name";

  }

  if (req.body.birthDate == "") {
    errors.birthDate = "Sorry, you must enter date of birth";

  }

  if (req.body.email == "") {
    errors.email = "Sorry, you must enter email address";

  }

  if (req.body.password == "*") {
    errors.password = "Do not enter symbols";

  }

  if (req.body.password.length < "8") {
    errors.password = "Please, enter al least 10 characters";

  }

  if (req.body.password == "") {
    errors.password = "Sorry, you must enter password";

  }


  if (errors.firstName || errors.lastName || errors.birthDate || errors.email || errors.password) {
    res.render("sign-up", {
      inputs: errors
    })
  }

});

app.post("/sign-in", (req, res) => {

  const errors = {};

  if (req.body.eMail == "") {
    console.log('has error')
    errors.eMail = "Please, enter email address";

  }

  if (req.body.passw == "") {
    errors.passw = "Please, enter password";

  }


  if (errors.eMail || errors.passw) {
    res.render("sign-in", {
      signin: errors
    })
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{

    console.log(`Web Server is up and running`);
})