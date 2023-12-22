//internal modules
const path = require("path");
//external modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { setStatics } = require("./utils/statics");

//middlewares-start
app.use(bodyParser.urlencoded({ extended: false }));

//middlewares-end

//ejs-start
app.set("view engine", "ejs");
app.set("views", "views");
//ejs-end
//set static files start
setStatics(app);
//set static files end
//Routes-start
app.get("/", (req, res) => {
  res.render("index", { pageTitle: "toDoApplication" });
});
//Routes-end

app.listen(3000, () => {
  console.log("server is running");
});
