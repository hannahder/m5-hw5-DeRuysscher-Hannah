var pizza = {
  crust: "thin",
  cheese: "mozarella",
  sauce: "light",
  addToppings: function() {
    console.log("Please add pepperoni and sausage");
  }
};

var orderPizza = function() {
  console.log(pizza.crust);
  console.log(pizza.cheese);
  console.log(pizza.sauce);
  pizza.addToppings();
}
orderPizza();
