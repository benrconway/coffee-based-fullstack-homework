var express = require("express");
var app = express();
var coffeeRouter = require("./controllers/coffee_controller.js")

app.use(express.static(__dirname +"/../client/build"))

app.use("/api/shops", coffeeRouter)


app.listen(3000, function() {
  console.log("App is running on port 3000");
})
