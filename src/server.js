const express = require("express")
const server = express()

//configure application paths
//home page
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

//start server
server.listen(3000)