
const express = require('express');
const app = express();

require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.static('public'))
//ca sert à utiliser le dossier public

app.set("views", "./views"); 
app.set("view engine", "ejs");

let message = "Tickets";

app.get("/",(req,res)=> {
    res.render("liste-tickets", {message: message });
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

