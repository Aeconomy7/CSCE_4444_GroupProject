var app = angular.module('customerModule', ['dbApp']);

// Stores all data about a customer
app.service('customerData', function(orderDatabase) {
  var tableId = 0;  // Eventually will be linked with session
  var phone_no = "0000000000";
  var order_cart = []; // Stores items added but not placed yet
  var order_cost = 0.0; // Stores hypothetical cost if they placed the order so they can see how much its at
  var order_overall = []; // Stores the items of all orders placed
  var final_bill = 0; // Stores the final bill of all orders placed
  var refills = [];//stores refills needed by customer
  var help_requests = [];//stores pairs of tables and help requests needed
  var needHelp = false;//stores whether a table has called for help or not
  return {
    setTableId: setTableId,
    setPhoneNo: setPhoneNo,
    addToCart: addToCart,
    getTableId: getTableId,
    getPhoneNo: getPhoneNo,
    getCart: getCart,
    getCost: getCost,
    addToBill: addToBill,
    getOrderOverall: getOrderOverall,
    getBill: getBill,
    getRefills: getRefills,
    removeFromCart: removeFromCart,
    removeFromBill: removeFromBill,
    customerHelp: customerHelp,
    getHelpRequests: getHelpRequests,
    getHighestItemofType: getHighestItemofType
  };

  function setTableId(id) {
    tableId = id;
  }

  function getTableId() {
    return tableId;
  }

  function setPhoneNo(phone) {
    phone_no = phone;
  }

  function getPhoneNo() {
    return phone_no;
  }
  // Adding an item to their order cart, not yet placed
  function addToCart(phone, id, name, floatPrice, type) {
    order_cart.push({'phone_no': phone, 'sid': id, 'item_name': name, 'price': floatPrice, 'type': type, 'active': "1"});
    console.log("order cost curr:");
    console.log(order_cost);
    console.log(floatPrice);
    order_cost += floatPrice;
    console.log(order_cost);
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
    orderDatabase.push_order(order_cart);
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

  function getRefills() {
    for(var i = 0; i < order_overall.length; i++){
      if(order_overall[i].type == 'drink'){
        refills.push(order_overall[i]);
      }
    }
    return refills;
  }

  function removeFromCart(index) {
    // so the work flow is
    //1. select item add it to my_tab (my_tab needs to be dyanmciall created and exist until its processed in #/pay)
    // 2. Allow for up to the number of items in order_overall
    // 3. when pay tab is selected send my_tab to #/pay (need some kind of error checking here)
    // 4. remove items from order_overall and update final_bill
    // 5. if items left in order_overall return to #/your_bill
    // create new tab and add spliced item here. they might want to add more items to tab.
  //  var new Array tab_item = order_overall.splice(index, 1);

    // tab_item needs to have teh first 2 itmes the same but the 4 are specfic to the item beign added to tab.
    // tab_item = my_tab.push({'phone_no': phone, 'sid': id, 'item_name': name, 'price': floatPrice, 'type': type, 'active': "1"});
    return order_overall;
  }

 //TODO :     //this function needs to accept an object selected_orders
 function removeFromBill(selected_orders) {
   final_bill -= selected_orders_cost;

   // order_cart = order_cart [] - selected_orders; TODO
   // orderDatabase.push_order(order_cart)
 }

 function customerHelp(t_id) {
   for(var i = 0; i < help_requests.length; i++){
     if(help_requests[i].ID == t_id){
       help_requests[i].needsHelp = !help_requests[i].needsHelp;
       return;
     }
   }
   help_requests.push({'ID': t_id, 'needsHelp': true});
   console.log("added true " + t_id);
 }

 function getHelpRequests() {
   return help_requests;
 }

 //function returns the item with the highest value in order_overall
 function getHighestItemofType(type_f) {
   var highestsum = 0.0;
   var highestPricedItem = [];//keeps track of the highest priced item

   for(var i = 0; i < order_overall.length; i++){
     if(order_overall[i].type == type_f && order_overall[i].price >= highestsum){
       highestPricedItem = order_overall[i];
     }
   }
   console.log('highestPricedItem: ' + highestPricedItem.name + ':' highestPricedItem.price);

   return highestPricedItem;
 }
})
