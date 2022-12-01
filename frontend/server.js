const express = require("express");
const path = require("path");

const rootController = require('./domain/root_controller')
const authController = require('./domain/auth/controller')

const app = express();

app.set("view engine", "hbs")
app.set("views", path.resolve(__dirname, "views"))
app.use(express.urlencoded({extended: false}))

app.use("/static", express.static(path.resolve(__dirname, "static")));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );                       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));   // to support URL-encoded bodies

app.get("/", rootController.root)

app.post("/auth/registration", authController.registration)
app.post("/auth/login", authController.login)
app.post("/auth/logout", authController.logout)


const PORT = process.env.PORT || 3000 
app.listen(PORT, () => console.log("Server started on PORT =", PORT));