var viewer = {}
viewer.renderHome = function(shops) {
  for(var shop of shops) {
    this.renderShop(shop);
  }
}

viewer.renderShop = function(shop) {
  var mainDiv = document.getElementById("primary");
  var shopDiv = document.createElement("div");
  shopDiv.className = "shop-div";

  var p = document.createElement("p");
  p.innerHTML = "<b>" + shop.name + "</b><br>Address: " + shop.address + "<br>" +
  "Coffee Prices:";
  var ul = document.createElement("ul");
  for(var coffee in shop.coffeePrices) {
    this.renderList(coffee, ul, shop)
  }
  shopDiv.appendChild(p)
  shopDiv.appendChild(ul)
  mainDiv.appendChild(shopDiv)
}

viewer.renderList = function(item, anchor, shop) {
  var li = document.createElement("li")
  li.innerText = item + ":  £" + shop.coffeePrices[item];
  anchor.appendChild(li)
}

module.exports = viewer;
