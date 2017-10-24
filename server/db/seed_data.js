use edinburgh_coffee;

db.dropDatabase();

db.shops.insert([
  {
    name: "Wellington",
    longBlack: 2.5
  },
  {
    name: "Buba Budan",
    cappuccino: 2.5
  }
])
