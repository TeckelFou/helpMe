
const express = require('express');
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.set("views", "./views"); 
app.set("view engine", "ejs");

let message = "help oui !!";

app.get("/",(req,res)=> {
    res.render("home", {message: message });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })