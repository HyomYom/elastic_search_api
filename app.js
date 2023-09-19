const express = require("express");
const APPROOT = require("app-root-path");
const config = require(`${APPROOT}/config/config`);
const proxyServer = require(`${APPROOT}/routes/index`);
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());

//post
// app.unsubscribe(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

proxyServer(app);

// Server Port
const port = config.API_SERVICE_PORT;
app.set(port);

// ejs

app.set("view engine", "ejs");
app.use(express.static("views"));
// app.use(express.static(__dirname + '/'));

app.get("/", function (req, res) {
  res.render("idx_first");
});

// Create Http Server
// const server = http.createServer(app);
// server.listen(port);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${port} 🚀`);
app.listen(port, handleListening);

module.exports = app;
