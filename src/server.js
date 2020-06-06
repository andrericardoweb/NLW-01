const express = require("express")
const server = express()
//set up public folder
server.use(express.static("public"))

//configure application paths
//home page
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

//start server
server.listen(3000)