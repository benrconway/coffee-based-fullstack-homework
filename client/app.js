var queryHelper = require("./helpers/request_helper.js")
var viewer = require("./views/coffee_views.js")

var app = function() {

  queryHelper.getRequest("http://localhost:3000/api/shops", function(shops) {
    viewer.renderHome(shops);
  })

}

window.addEventListener("DOMContentLoaded", app);
