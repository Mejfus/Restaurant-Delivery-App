"use strict";

const restaurant = {
  nameOf: "Piatto Restaurant",
  addres: "Branka Bajica 9k,  Novi Sad",
  categories: ["Italian", "Pizza", "Pasta", "Family", "Business"],
  owner: "Marko Markovic",
  openTime: {
    monday: {
      open: 8,
      closed: 23,
    },
    tuesday: {
      open: 8,
      closed: 23,
    },
    wednesday: {
      open: 8,
      closed: 23,
    },
    thursday: {
      open: 8,
      closed: 23,
    },
    firday: {
      open: 9,
      closed: 0,
    },
    saturday: {
      open: 10,
      closed: 1,
    },
    sunday: {
      open: 10,
      closed: 22,
    },
    tables: {
      table1: "free",
      table2: "free",
      table3: "free",
      table4: "free",
      table5: "free",
      table6: "free",
      table7: "free",
      table8: "free",
      table9: "free",
      table10: "free",
    },
  },
  mainMenu: {
    mainDish: [
      { name: "Rissoto", price: 10 },
      { name: "Gnocchi", price: 12 },
      { name: "Insalata Vietri", price: 8 },
      { name: "Bussala", price: 9 },
      { name: "Ramstek", price: 14 },
    ],
    sideDish: [
      { name: "Insalata Pertosa", price: 8 },
      { name: "Insalata Capresse", price: 7 },
      { name: "Insalata Pomodoro", price: 6 },
      { name: "Insalata Povrce", price: 7 },
      { name: "Insalata Bistecca", price: 12 },
    ],
    dessert: [
      { name: "Bardolino", price: 5 },
      { name: "Borgo", price: 5 },
      { name: "Mondelo", price: 5 },
      { name: "Taranto", price: 4 },
      { name: "Lava Cake", price: 5 },
    ],
  },

  drinksMenu: {
    alcoholic: [
      { name: "Rakija", price: 2 },
      { name: "Viski", price: 4 },
      { name: "Pelin", price: 2 },
      { name: "Jeger", price: 3 },
      { name: "Vino", price: 4 },
    ],
    nonAlcoholic: [
      { name: "Coca cola", price: 2 },
      { name: "Fanta", price: 2 },
      { name: "Sprite", price: 2 },
      { name: "Pepsi", price: 2 },
      { name: "Water", price: 2 },
    ],
  },

  // order: function (
  //   [mainIndex],
  //   [sideIndex],
  //   [dessertIndex],
  //   [alcoholicIndex],
  //   [nonAlcoholicIndex]
  // ) {
  //   return [
  //     this.mainMenu.mainDish[mainIndex].name,
  //     this.mainMenu.sideDish[sideIndex].name,
  //     this.mainMenu.dessert[dessertIndex].name,
  //     this.drinksMenu.alcoholic[alcoholicIndex].name,
  //     this.drinksMenu.nonAlcoholic[nonAlcoholicIndex].name,
  //   ];
  // },
  // Sta raditi ako neki od itema nije definisan?
  // orderDelivery: function ({
  //   mainIndex,
  //   sideIndex,
  //   dessertIndex,
  //   alcoholicIndex,
  //   nonAlcoholicIndex,
  //   time,
  //   addres,
  // }) {
  //   console.log(`Order recieved, your ${this.mainMenu.mainDish[mainIndex].name},
  //   ${this.mainMenu.sideDish[sideIndex].name},
  //   ${this.mainMenu.dessert[dessertIndex].name},
  //   ${this.drinksMenu.alcoholic[alcoholicIndex].name},
  //   ${this.drinksMenu.nonAlcoholic[nonAlcoholicIndex].name}, will be delivered at ${addres} at ${time}`);
  // },
};
// Maybe clone later?
const cloneRestaurant = { ...restaurant };

const finalOrder = {
  orderedDishes: [],
  orderedSum: 0,
};

// Na click pozvati funkciju i dodati joj parametar

const rissoto = document.getElementById("rissotoBtn");
const bussala = document.getElementById("bussalaBtn");
const vietri = document.getElementById("vietriBtn");
const rumpsteak = document.getElementById("rumpsteakBtn");
const gnocchi = document.getElementById("gnocchiBtn");
const orderBtn = document.getElementById("checkBtn");
const billInfo = document.getElementById("ord-sum");
const deliveryCost = document.getElementById("del-cost");
const getElementById = document.getElementById("fin-sum");

//========================RISSOTO===========================//
rissoto.addEventListener("click", function () {
  addOrder(0);
});
// ======================GNOCCHI=============================//
gnocchi.addEventListener("click", function () {
  addOrder(1);
});

//========================VIETRI=======================//
vietri.addEventListener("click", function () {
  addOrder(2);
});

// =======================BUSSALA========================//
bussala.addEventListener("click", function () {
  addOrder(3);
});
// ======================RUMPSTEAK=============================//
rumpsteak.addEventListener("click", function () {
  addOrder(4);
});
//=======================ORDER BTN================================//

orderBtn.addEventListener("click", function () {
  passValue();
  window.location.href = "../Order/ordering.html";
});

const addOrder = function (index) {
  let name = restaurant.mainMenu.mainDish[index].name;
  let price = restaurant.mainMenu.mainDish[index].price;
  let found = false;

  finalOrder.orderedDishes.forEach((dish) => {
    if (dish.name === name) {
      dish.quantity += 1;
      found = true;
      return;
    }
  });
  !found &&
    finalOrder.orderedDishes.push({ name: name, price: price, quantity: 1 });

  finalOrder.orderedSum += price;
  orderBtn.textContent = `ADD MORE (${finalOrder.orderedSum}$)`;
};

const passValue = function () {
  window.localStorage.setItem("order", JSON.stringify(finalOrder));
};
