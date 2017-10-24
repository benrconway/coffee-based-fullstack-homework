var requestHelper = {
  getRequest: function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
      callback(data);
    })

    xhr.send();
  }
}

module.exports = requestHelper;
