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
  res.sendFile(__dirname + "/views/index.html")
})
//create-point
server.get("/create-point", (req, res) => {
  res.sendFile(__dirname + "/views/create-point.html")
})
//search results
server.get("/search-results", (req, res) => {
  res.sendFile(__dirname + "/views/search-results.html")
})

//start server
server.listen(3000)