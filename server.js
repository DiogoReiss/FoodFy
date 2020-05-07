const express = require('express');
const nunjucks = require('nunjucks');
const data = require("./data")

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
   express:server
});

server.get("/", function(req, res) {
   return res.render("index", {items: data})
});

server.get("/about", function(req, res) {
   return res.render("about")
})

server.get("/recipes", function(req, res) {
   return res.render("recipes", {items: data})
})
server.listen(5000, function() {
   console.log("O mundo gira e o server roda vacilão!")
});
