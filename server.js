const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
   express:server
});

server.get("/", function(req, res) {
   
   return res.send("TA UP VACILÂO")
   //return res.render("index")
});

server.listen(5000, function() {
   console.log("O mundo gira e o server roda vacilão!")
});
