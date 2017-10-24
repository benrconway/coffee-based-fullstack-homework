var MongoClient = require("mongodb").MongoClient;

var queryHelper = {
  url: "mongodb://localhost:27017/edinburgh_coffee",
  //index route
  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var shopsCollection = db.collection("shops");

      shopsCollection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      })
    })
  }
  //add the other route requests here
}

module.exports = queryHelper;
