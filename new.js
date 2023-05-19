document.body.onload = addElements;

function addElements() {
  let order = JSON.parse(window.localStorage.getItem("order"));
  const list = document.getElementById("items");

  for (let i = 0; i < order.orderedDishes.length; i++) {
    const listItem = document.createElement("li");
    const orderedDishEl = document.createElement("h3");
    const orderedPriceEl = document.createElement("span");
    const addPlus = document.createElement("span");
    const addMinus = document.createElement("span");
    const flexPar = document.createElement("div");
    const textEl = document.createElement("p");
    const exit = document.getElementById("iks");
    let orderName = order.orderedDishes[i].name;
    let orderPrice = order.orderedDishes[i].price;
    let orderQuantity = order.orderedDishes[i].quantity;
    addPlus.innerHTML = `<svg
    "
    id="plus"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6 icons"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>`;
    addMinus.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
     id="minus"
     fill="none" viewBox="0 0 24 24" 
     stroke-width="1.5" 
     stroke="currentColor" 
     class="w-6 h-6 icons">
    
    <path stroke-linecap="round" 
    stroke-linejoin="round" 
    d="M19.5 12h-15" />
  </svg>
  
  `;
    //===================REMOVING ELEMENTS===============//
    const removeEl = function () {
      listItem.remove();
    };
    //===========ADDING CLASSES=====================//
    listItem.classList.add("grid-done", "mar-top");
    orderedPriceEl.classList.add("add-flex");

    //===============================================//
    orderedDishEl.textContent = `${orderName} - x${orderQuantity}`;

    textEl.textContent = `${orderPrice}$ x ${orderQuantity} = ${
      orderPrice * orderQuantity
    }$`;
    //================APPENDING===================//
    listItem.appendChild(orderedDishEl);
    listItem.appendChild(orderedPriceEl);
    orderedPriceEl.appendChild(textEl);
    orderedPriceEl.appendChild(flexPar);
    flexPar.appendChild(addMinus);
    flexPar.appendChild(addPlus);
    list.appendChild(listItem);

    //===========================================//

    const currBill = document.getElementById("ord-sum");
    currBill.textContent = `${order.orderedSum}` + `$`;
    const delCost = document.getElementById("del-cost");
    let costOnly = 3;
    delCost.textContent = `${costOnly}` + `$`;
    const finBill = document.getElementById("fin-sum");
    finBill.textContent = `${costOnly + order.orderedSum}$`;

    addPlus.addEventListener("click", function () {
      // const {
      //   name: name,
      //   price: price,
      //   quantity: quantity,
      // } = order.orderedDishes
      // console.log(order.orderedDishes);

      orderedDishEl.textContent = `${orderName} - x${(order.orderedDishes[
        i
      ].quantity += 1)}`;

      textEl.textContent = `${orderPrice}$ x ${
        order.orderedDishes[i].quantity
      } = ${orderPrice * order.orderedDishes[i].quantity}$`;

      order.orderedSum += orderPrice;
      currBill.textContent = `${order.orderedSum}$`;
      finBill.textContent = `${costOnly + order.orderedSum}$`;

      console.log(order);
    });

    addMinus.addEventListener("click", function () {
      orderedDishEl.textContent = `${orderName} - x${(order.orderedDishes[
        i
      ].quantity -= 1)}`;

      textEl.textContent = `${orderPrice}$ x ${
        order.orderedDishes[i].quantity
      } = ${orderPrice * order.orderedDishes[i].quantity}$`;

      order.orderedSum -= orderPrice;
      currBill.textContent = `${order.orderedSum}$`;
      finBill.textContent = `${costOnly + order.orderedSum}$`;

      if (order.orderedDishes[i].quantity === 0) {
        removeEl();
      }
    });

    exit.addEventListener("click", function () {
      window.location.href = "../Main Dish/index.html";
    });
  }
}
