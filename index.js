const express = require('express')
const app = express()
const PORT = 8081
const bodyParser = require('body-parser')
const handlebars = require("express-handlebars");

app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + "/public"))

const router = require('./routes/routes')
app.use('/', router)


app.listen(PORT, () => {
    console.log("O servidor está Online!")
})