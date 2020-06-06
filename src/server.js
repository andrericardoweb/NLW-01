const express = require("express")
const server = express()
//set up public folder
server.use(express.static("public"))

//template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//configure application paths
//home page
server.get("/", (req, res) => {
  return res.render("index.html")
})
//create-point
server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})
//search results
server.get("/search-results", (req, res) => {
  return res.render("search-results.html")
})

//start server
server.listen(3000)