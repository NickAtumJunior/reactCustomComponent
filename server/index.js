const express = require("express")
const app = express()
const mysql = require("mysql2")
const bodyParser = require("body-parser")
const cors = require('cors')

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Nithish0207@",
  database: "wma"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post("/api/sendNames", (req, res) => {
  const firstName = req.body.firstName
  const secondName = req.body.secondName
  const net_weight = "7"
  const current_date = "6"
  const vehicle_number = "dertgyhj"
  const challan_number = "456789"
  const driver_name = "dftghjk"
  const gross_weight = "5"
  const image_url = "dertfghujkdfghcfvgfgvbhn"
  const vendor_name = "fdghj"


  const sqlInsert = `INSERT INTO raja (serial_number,sampled,net_weight,current,vehicle_number) VALUES (?,?,?,?,?)`
  db.query(sqlInsert, [
    firstName,
    secondName,
    net_weight,
    current_date,
    vehicle_number,

  ], (err, result) => {
    console.log("Result", result)
    console.log("Error", err)
  })

})

app.get("/api/getData", (req,res) => {
  const sqlInsert = "SELECT * FROM raja"
  db.query(
    sqlInsert,
    [],
    (err,result) => {
      res.send(result)
      console.log(result)
      console.log(err)
    }
  )
})

// customsizeable port with local system ip as server
// http://192.168.29.22:3002
// data fetch from api

// app.get("/api/CheckValues", (req, res) => {
//     const sqlGet = "SELECT * FROM marks";
//     db.query(sqlGet,  (err, result) => {
//       res.send(result);
//       console.log(result);
//       console.log(err);
//     });
//   });


app.listen(3006, () => {

  console.log("Running on port 3006")
})
