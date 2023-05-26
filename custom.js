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

const pertosa = document.getElementById("pertosaBtn");
const caprese = document.getElementById("capreseBtn");
const pomodoro = document.getElementById("pomodoroBtn");
const vege = document.getElementById("vegeBtn");
const biftek = document.getElementById("biftekBtn");
const bardolino = document.getElementById("bardolinoBtn");
const borgo = document.getElementById("borgoBtn");
const mondelo = document.getElementById("mondeloBtn");
const taranto = document.getElementById("tarantoBtn");
const lava = document.getElementById("lavaBtn");
const rakija = document.getElementById("rakijaBtn");
const viski = document.getElementById("viskiBtn");
const pelin = document.getElementById("pelinBtn");
const jeger = document.getElementById("jegerBtn");
const vino = document.getElementById("vinoBtn");
const cola = document.getElementById("colaBtn");
const fanta = document.getElementById("fantaBtn");
const sprite = document.getElementById("spriteBtn");
const pepsi = document.getElementById("pepsiBtn");
const water = document.getElementById("waterBtn");
const rissoto = document.getElementById("rissotoBtn");
const bussala = document.getElementById("bussalaBtn");
const vietri = document.getElementById("vietriBtn");
const rumpsteak = document.getElementById("rumpsteakBtn");
const gnocchi = document.getElementById("gnocchiBtn");
const orderBtn = document.getElementById("checkBtn");
const billInfo = document.getElementById("ord-sum");
const deliveryCost = document.getElementById("del-cost");
const getElementById = document.getElementById("fin-sum");
const descPhotos = document.querySelectorAll(".photo-cont");

const sreachBar = document.getElementById("sreach-bar");

sreachBar.addEventListener("input", filterList);

function filterList() {
  const filter = sreachBar.value.toLowerCase();
  const listItems = document.querySelectorAll(".grid-done");

  const count = {};
  count["main-dishes"] = 0;
  count["side-dishes"] = 0;
  count["desserts"] = 0;
  count["drinks"] = 0;
  count["soft-drinks"] = 0;

  listItems.forEach((item) => {
    let parEl = item.parentElement.parentElement.id;
    let text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = "";
      count[parEl]++;
    } else {
      item.style.display = "none";
    }
  });
  for (const key in count) {
    let sectionImg = document
      .getElementById(key)
      ?.getElementsByClassName("photo-cont")[0];
    if (sectionImg) {
      if (count[key] === 0) {
        sectionImg.style.display = "none";
      } else {
        sectionImg.style.display = "";
      }
    }
  }
}

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

pertosa.addEventListener("click", function () {
  addOrderSide(0);
});

caprese.addEventListener("click", function () {
  addOrderSide(1);
});
pomodoro.addEventListener("click", function () {
  addOrderSide(2);
});
vege.addEventListener("click", function () {
  addOrderSide(3);
});
biftek.addEventListener("click", function () {
  addOrderSide(4);
});

bardolino.addEventListener("click", function () {
  addOrderDessert(0);
});
borgo.addEventListener("click", function () {
  addOrderDessert(1);
});
mondelo.addEventListener("click", function () {
  addOrderDessert(2);
});
taranto.addEventListener("click", function () {
  addOrderDessert(3);
});
lava.addEventListener("click", function () {
  addOrderDessert(4);
});

rakija.addEventListener("click", function () {
  addOrderDrinks(0);
});

viski.addEventListener("click", function () {
  addOrderDrinks(1);
});
pelin.addEventListener("click", function () {
  addOrderDrinks(2);
});
jeger.addEventListener("click", function () {
  addOrderDrinks(3);
});
vino.addEventListener("click", function () {
  addOrderDrinks(4);
});

cola.addEventListener("click", function () {
  addOrderSoftDrinks(0);
});
fanta.addEventListener("click", function () {
  addOrderSoftDrinks(1);
});
pepsi.addEventListener("click", function () {
  addOrderSoftDrinks(2);
});
sprite.addEventListener("click", function () {
  addOrderSoftDrinks(3);
});
water.addEventListener("click", function () {
  addOrderSoftDrinks(4);
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
const addOrderSide = function (index) {
  let name = restaurant.mainMenu.sideDish[index].name;
  let price = restaurant.mainMenu.sideDish[index].price;
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
const addOrderDessert = function (index) {
  let name = restaurant.mainMenu.dessert[index].name;
  let price = restaurant.mainMenu.dessert[index].price;
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
const addOrderDrinks = function (index) {
  let name = restaurant.drinksMenu.alcoholic[index].name;
  let price = restaurant.drinksMenu.alcoholic[index].price;
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
const addOrderSoftDrinks = function (index) {
  let name = restaurant.drinksMenu.nonAlcoholic[index].name;
  let price = restaurant.drinksMenu.nonAlcoholic[index].price;
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
