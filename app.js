const express = require("express");//import the express package (installed)

const app = express(); //express app object

const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{

    console.log(`Web Server is up and running`);
})