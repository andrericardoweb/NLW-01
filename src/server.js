const express = require("express")
const server = express()

//get the database
const db = require("./database/db")

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
  
  //get data from the database
  db.all(`SELECT * FROM places`, function(err, rows) {
    if(err) {
      return console.log(err)
    }

    const total = rows.length

    // show the html page with data from the database
    return res.render("search-results.html", { places: rows, total: total})
  })

  
})

//start server
server.listen(3000)