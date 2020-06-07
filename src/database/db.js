///import sqlite3 dependencies
const sqlite3 = require("sqlite3").verbose()

//create object that will perform operations on the database
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//use the database object for our operations

//db.serialize(() => {
  //create a table
  /*db.run(`
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
  `)*/

  //insert data into the table
  /*const query = `
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
    "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    "Papersider",
    "Via Expressa, Serraria",
    "Nº 77",
    "Alagoas",
    "Maceió",
    "Papéis e Papelão"
  ]

  function afterInsertData(err) {
    if(err) {
      return console.log(err)
    }

    console.log("Successful registration")
    console.log(this)
  }
  db.run(query, values, afterInsertData) */

  //Query table data
  /*db.all(`SELECT name FROM places`, function(err, rows) {
    if(err) {
      return console.log(err)
    }

    console.log("Your records:")
    console.log(rows)
  })*/

  //Delete data from the table
  /*db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
    if(err) {
      return console.log(err)
    }
    console.log("Registration successfully deleted")
  })
})*/