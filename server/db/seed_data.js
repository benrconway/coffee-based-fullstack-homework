use edinburgh_coffee;

db.dropDatabase();

db.shops.insert([
  {
    name: "Wellington",
    address: "33A George Street, Edinburgh EH2 2HN, Scotland",
    coffeePrices:
    {
      longBlack: 2.5
    }
  },
  {
    name: "Buba Budan",
    address:"Arch 12, 17 East Market Street, Edinburgh EH8 8FS, Scotland",
    coffeePrices:
    {
      cappuccino: 2.5
    }
  }
])
