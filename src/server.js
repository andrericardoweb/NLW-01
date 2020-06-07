const express = require("express")
const server = express()

//get the database
const db = require("./database/db")

//set up public folder
server.use(express.static("public"))

//enable the use of req.body
server.use(express.urlencoded({extended: true}))

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

server.post("/savepoint", (req, res) => {

  //insert data into the database
  const query = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items 
    ) VALUES (?,?,?,?,?,?,?);
  `

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]

  function afterInsertData(err) {
    if(err) {
      
      return console.log(err)  
    }

    console.log("Successful registration")
    console.log(this)

    return res.render("/create-point", {saved: true})
  }

  db.run(query, values, afterInsertData)
})


//search results
server.get("/search-results", (req, res) => {

  const search = req.query.search

  if(search == "") {
    return res.render("search-results.html", { total: 0})
  }
  
  //get data from the database
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
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