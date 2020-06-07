///import sqlite3 dependencies
const sqlite3 = require("sqlite3").verbose()

//create object that will perform operations on the database
const db = new sqlite3.Database("./src/database/database.db")


//use the database object for our operations
db.serialize(() => {
  //create a table
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT 
    );
  `)

  //insert data into the table
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
    "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    "Colectoria",
    "Av. Fernandes Lima, Farol",
    "Nº 1500",
    "Alagoas",
    "Maceió",
    "Resíduos Eletrônicos, Lâmpadas"
  ]

  function afterInsertData(err) {
    if(err) {
      return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)
  }


  db.run(query, values, afterInsertData)

  //Query table data

  //Delete data from the table
})