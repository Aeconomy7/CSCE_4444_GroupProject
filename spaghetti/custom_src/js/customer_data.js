var app = angular.module('customerModule', []);

// Stores all data about a customer
app.service('customerData', function() {
  var tableId = 0;  // Eventually will be linked with session
  var order_cart = []; // Stores items added but not placed yet
  var order_cost = 0.0; // Stores hypothetical cost if they placed the order so they can see how much its at
  var order_overall = []; // Stores the items of all orders placed
  var final_bill = 0.0; // Stores the final bill of all orders placed

  return {
  //  clearCart: clearCart,
    addToCart: addToCart,
    getCart: getCart,
    getCost: getCost,
    addToBill: addToBill,
    getOrderOverall: getOrderOverall,
    getBill: getBill
  };

  /* eventually use session
  save: function(session) {
    this.customer = session.customer;
  }, */

  // Adding an item to their order cart, not yet placed
  function addToCart(name, price, type) {
    order_cart.push({'name': name, 'price': price, 'type': type});
    order_cost += price;
  }

  // Returns items added to order
  function getCart() {
    return order_cart;
  }

  // Returns cost of their current order so far, not their overall bill
  function getCost() {
    return order_cost;
  }

  // Submits items from cart to their total bill and clears cart
  function addToBill() {
    order_overall = order_overall.concat(order_cart);
    final_bill += order_cost;
    order_cart = [];
    order_cost = 0.0;
  }

  // Returns overall order, for bill
  function getOrderOverall() {
    return order_overall;
  }

  // Returns payment amount due
  function getBill() {
    return final_bill;
  }

});