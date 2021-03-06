var app = angular.module('switchApp', ['ngRoute', 'customerModule', 'dbApp']);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
    $routeProvider

    .when('/', {
      templateUrl:
      '/spaghetti/public_html/injected_pages/features.html',
      controller: 'featuresController'
    })
    // Staff routing and its subpages
    .when('/staff', {
      templateUrl: '/spaghetti/public_html/injected_pages/staff/staff_login.html',
      controller: 'staffController'
    })

              // Manager lad
              .when('/staff/manager', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/manager.html',
                controller: 'managerController'
              })
                    .when('/staff/manager/modify_menu', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/modify_menu.html',
                      controller: 'managerMenuController'
                    })

                          .when('/staff/manager/modify_menu/add_menu_item', {
                            templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/add_menu_item.html',
                            controller: 'managerMenuAddController'
                          })

                          .when('/staff/manager/modify_menu/edit_menu_item', {
                            templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/edit_menu_item.html',
                            controller: 'managerMenuEditController'
                          })

                          .when('/staff/manager/modify_menu/delete_menu_item', {
                            templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/delete_menu_item.html',
                            controller: 'managerMenuDeleteController'
                          })

                    .when('/staff/manager/modify_loyalty', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/modify_loyalty.html',
                      controller: 'managerLoyaltyController'
                    })

                          .when('/staff/manager/modify_loyalty/add_loyalty_item', {
                            templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/add_loyalty_item.html',
                            controller: 'managerLoyaltyAddController'
                          })

                          .when('/staff/manager/modify_loyalty/edit_loyalty_item', {
                            templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/edit_loyalty_item.html',
                            controller: 'managerLoyaltyEditController'
                          })

                          .when('/staff/manager/modify_loyalty/delete_loyalty_item', {
                            templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/delete_loyalty_item.html',
                            controller: 'managerLoyaltyDeleteController'
                          })

                    .when('/staff/manager/comp', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/comp.html',
                      controller: 'managerCompController'
                    })

                    .when('/staff/manager/financial', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/financial.html',
                      controller: 'managerFinancialController'
                    })

                    .when('/staff/manager/feedback', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/feedback.html',
                      controller: 'managerFeedController'
                    })

              // Kitchen lads
              .when('/staff/kitchen', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/kitchen/kitchen.html',
                controller: 'kitchenStaffController'
              })

              .when('/staff/kitchen/feedback', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/kitchen/feedback.html',
                controller: 'kitchenStaffFeedController'
              })

              .when('/staff/kitchen/open_orders', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/kitchen/open_orders.html',
                controller: 'kitchenStaffOrdersController'
              })

              // Waitstaff lads
              .when('/staff/waitstaff', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/waitstaff/waitstaff.html',
                controller: 'waitStaffController'
              })

                    .when('/staff/waitstaff/refills', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/waitstaff/refills.html',
                      controller: 'waitStaffRefillController'
                    })


    // Menu routing and its subpages
      .when('/menu', {
        templateUrl: '/spaghetti/public_html/injected_pages/menu/menu.html',
        controller: 'menuController'
      })
              .when('/menu/appetizers', {
                templateUrl: '/spaghetti/public_html/injected_pages/menu/menu_section.html',
                controller: 'menuAppetizersController'
              })

              .when('/menu/drinks', {
                templateUrl: '/spaghetti/public_html/injected_pages/menu/menu_section.html',
                controller: 'menuDrinksController'
              })

              .when('/menu/entrees', {
                templateUrl: '/spaghetti/public_html/injected_pages/menu/menu_section.html',
                controller: 'menuEntreesController'
              })

              .when('/menu/desserts', {
                templateUrl: '/spaghetti/public_html/injected_pages/menu/menu_section.html',
                controller: 'menuDessertsController'
              })

              .when('/menu/kids_menu', {
                templateUrl: '/spaghetti/public_html/injected_pages/menu/menu_section.html',
                controller: 'menuKidsController'
              })

      // Games routing and its subpages
      .when('/games', {
        templateUrl: '/spaghetti/public_html/injected_pages/games/games.html',
        controller: 'gamesController'
      })

              .when('/games/connect_four', {
                templateUrl: '/spaghetti/public_html/injected_pages/games/connect_four.html',
                controller: 'gamesConnectFourController'
              })

              .when('/games/pong', {
                templateUrl: '/spaghetti/public_html/injected_pages/games/pong.html',
                controller: 'gamesPongController'
              })

              .when('/games/tictactoe', {
                templateUrl: '/spaghetti/public_html/injected_pages/games/tictactoe.html',
                controller: 'gamesTTTController'
              })

              .when('/games/tetris', {
                templateUrl: '/spaghetti/public_html/injected_pages/games/tetris.html',
                controller: 'gamesTetrisController'
              })

      // Loyalty routing and its subpages
      .when('/loyalty', {
        templateUrl: '/spaghetti/public_html/injected_pages/loyalty/loyalty.html',
        controller: 'loyaltyController'
      })

            .when('/loyalty/profile', {
              templateUrl: '/spaghetti/public_html/injected_pages/loyalty/profile.html',
              controller: 'loyaltyProfileController'
            })

            .when('/loyalty/redeem', {
              templateUrl: '/spaghetti/public_html/injected_pages/loyalty/redeem.html',
              controller: 'loyaltyRedeemController'
            })

            .when('/loyalty/orderhistory', {
              templateUrl: '/spaghetti/public_html/injected_pages/loyalty/orderhistory.html',
              controller: 'loyaltyHistoryController'
            })

      // Your Order routing and its subpages
      .when('/your_order', {
        templateUrl: '/spaghetti/public_html/injected_pages/your_order/your_order.html',
        controller: 'your_orderController'
      })

      // Your Bill routing and its subpages
      .when('/your_bill', {
        templateUrl: '/spaghetti/public_html/injected_pages/your_bill/your_bill.html',
        controller: 'your_billController'
      })

            .when('/your_bill/pay', {
              templateUrl: '/spaghetti/public_html/injected_pages/your_bill/pay.html',
              controller: 'your_billPayController'
            })

            .when('/your_bill/split_bill', {
              templateUrl: '/spaghetti/public_html/injected_pages/your_bill/split_bill.html',
              controller: 'your_billSplitController'
            })

      // Template routing
      .when('/template', {
        templateUrl: '/spaghetti/public_html/injected_pages/template.html',
        controller: 'templateController'
      })

});

app.controller('featuresController', function($scope, customerData, menuDatabase) {
  $scope.pageName = "Features";
  var d = new Date();
  var hour = d.getHours();
  if(hour == 17) {
    customerData.setSpaghettiHour(true);
    console.log(customerData.getSpaghettiHour());
  }
  else {
    customerData.setSpaghettiHour(false);
    console.log(customerData.getSpaghettiHour());
  }
  // Display IOTD by first pulling all entrees/desserts from the DB, then search them for IOTD
  $scope.iotd_name = "";
  $scope.iotd_found = false;

  if(!$scope.iotd_found) {
    menuDatabase.pullDb("entree").then(function(response) {
        $scope.entrees = response;
        for(var i = 0; i < $scope.entrees.length; i++) {
          if($scope.entrees[i].iotd == "1") {
            $scope.iotd_found = true;
            $scope.iotd_name = $scope.entrees[i].item_name;
          }
        }
    });
  }
  if(!$scope.iotd_found) {
    menuDatabase.pullDb("dessert").then(function(response) {
        $scope.desserts = response;
        for(var i = 0; i < $scope.desserts.length; i++) {
          if($scope.desserts[i].iotd == "1") {
            $scope.iotd_found = true;
            $scope.iotd_name = $scope.desserts[i].item_name;
          }
        }
    });
  }


});

// Back button directive
app.directive('back', function() {
    return {
        restrict: 'A',
        link: function( scope, element, attrs ) {
            element.on( 'click', function () {
                history.back();
                scope.$apply();
            } );
        }
    };
});

// Currency filter directive
app.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });

            elem.bind('blur', function(event) {
                var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber));
            });
        }
    };
}]);

// Table ID form
app.controller('tableForm', function($scope, customerData) {
  $scope.t_id = '';
  $scope.updateId = function(id) {
    customerData.setTableId(id);
    console.log(customerData.getTableId());
  }
});

// Customer refills view
app.controller('your_refills', function($scope, customerData) {
  $scope.refills = customerData.getRefills();
});

//customer help Requests
app.controller('help_requests', function($scope, customerData) {
  $scope.addRequest = function() {
    console.log("adding request");
    customerData.customerHelp(customerData.getTableId());
  }
});

// Controllers for all pages
/* General Staff */
app.controller('staffController', function($scope, $window) {
  $scope.pageName = "Staff Login";

  $scope.login_id = "";
  $scope.counter = 0;

  $scope.appendVal = function(val) {
    if($scope.counter < 8) {
      $scope.login_id += val;
      $scope.counter++;
    }
    else {
      alert("No more numbers allowed");
    }
  }
  $scope.backspaceVal = function() {
    $scope.login_id = $scope.login_id.substring(0, $scope.login_id.length - 1);
    $scope.counter--;
  }

  $scope.staff_login = function() {
    console.log($scope.login_id);
    if($scope.login_id == "11114001" || $scope.login_id == "11114002" || $scope.login_id == "11114003") {
      console.log("Wait Staff login");
      $window.location.href ="/spaghetti/public_html/#/staff/waitstaff";
    }
    else if($scope.login_id == "11115001" || $scope.login_id == "11115002" || $scope.login_id == "11115003") {
      console.log("Kitchen Staff login");
      $window.location.href ="/spaghetti/public_html/#/staff/kitchen";
    }
    else if($scope.login_id == "11111337") {
      console.log("Manager login");
      $window.location.href ="/spaghetti/public_html/#/staff/manager";
    }
    else
      alert("Invalid login ID, please try again");
  }
});

/* Manager */
app.controller('managerController', function($scope) {
  $scope.pageName = "Manager";
});

// Menu controllers for manager
app.controller('managerMenuController', function($scope) {
  $scope.pageName = "Modify Menu";
});

app.controller('managerMenuAddController', function($scope, menuDatabase) {
  $scope.pageName = "Add New Item";

  $scope.addToMenu = function(name_add, type_add, price_add, desc_add, ingr_add, img_add) {
    // Input checking
    if(type_add == '1') {
      type_add = 'appetizer';
    } else if (type_add == '2') {
      type_add = 'drink'
    } else if (type_add == '3') {
      type_add = 'entree';
    } else if (type_add == '4') {
      type_add = 'dessert';
    } else if (type_add == '5') {
      type_add = 'kidsmenu';
    }

    if(name_add == undefined || type_add == undefined || price_add == undefined || desc_add == undefined || ingr_add == undefined || img_add == undefined)
      alert("Please enter information for all fields.");
    else if(parseFloat(price_add) < 0.0)
      alert("Price cannot be less than 0");
    // Add further input checks for now, such as apostrophes cuz gosh dang SQL errors


    // Add item if all input is fine
    else {
      var item_details = {
        type: type_add,
        item_name: name_add,
        price: price_add,
        description: desc_add,
        ingredients: ingr_add,
        img_path: img_add
      };
      menuDatabase.addItem(item_details);
      alert("Item added to menu!");
    }
  }
});

app.controller('managerMenuEditController', function($scope, menuDatabase) {
  $scope.pageName = "Edit Menu";

  // Get all the items from each category, manager chooses which to edit
  menuDatabase.pullDb("appetizer").then(function(response) {
      $scope.appetizers = response;
  });
  menuDatabase.pullDb("drink").then(function(response) {
      $scope.drinks = response;
  });
  menuDatabase.pullDb("entree").then(function(response) {
      $scope.entrees = response;
  });
  menuDatabase.pullDb("dessert").then(function(response) {
      $scope.desserts = response;
  });
  menuDatabase.pullDb("kidsmenu").then(function(response) {
      $scope.kidsmenu = response;
  });

  $scope.editMenuItem = function(item_name) {
    $scope.itemToEdit = item_name;
  }

  $scope.showItem = function(item_name) {
    if(item_name == $scope.itemToEdit)
      return true;
    return false;
  }

  $scope.submitEditMenu = function(name_add, price_add, desc_add, ingr_add, img_add) {
    if(name_add == undefined || price_add == undefined || desc_add == undefined || ingr_add == undefined || img_add == undefined)
      alert("Please enter information for all fields.");
    else if(parseFloat(price_add) < 0.0)
      alert("Price cannot be less than 0");
    // Add further input checks for now, such as apostrophes cuz gosh dang SQL errors

    // Add item if all input is fine
    else {
      var item_details = {
        original_item_name: $scope.itemToEdit,
        new_item_name: name_add,
        price: price_add,
        description: desc_add,
        ingredients: ingr_add,
        img_path: img_add
      };
      menuDatabase.editItem(item_details);
      alert("Menu item change submitted!");
    }
  }
});

app.controller('managerMenuDeleteController', function($scope, menuDatabase) {
  $scope.pageName = "Delete Menu Item";

  // Get all the items from each category, manager chooses which to delete
  menuDatabase.pullDb("appetizer").then(function(response) {
      $scope.appetizers = response;
  });
  menuDatabase.pullDb("drink").then(function(response) {
      $scope.drinks = response;
  });
  menuDatabase.pullDb("entree").then(function(response) {
      $scope.entrees = response;
  });
  menuDatabase.pullDb("dessert").then(function(response) {
      $scope.desserts = response;
  });
  menuDatabase.pullDb("kidsmenu").then(function(response) {
      $scope.kidsmenu = response;
  });

  $scope.removeFromMenu = function(item_name) {
    console.log(item_name);
    menuDatabase.removeItem(item_name);
    alert("Item successfully removed from menu.");
  }
});

app.controller('managerCompController', function($scope, $route, orderDatabase, takeoutOrderDatabase) {
  $scope.pageName = "Comp Order";
  $scope.tables = 24;
  $scope.orders = [];
  $scope.takeout_orders = [];
  $scope.takeout_order_names = [];
  $scope.forHereView = true;

  // Specifies size of table for ng-repeat, only accepts arrays
  $scope.getTableAmount = function () {
    return new Array($scope.tables);
  }

  $scope.showForHere = function() {
    return $scope.forHereView;
  }

  $scope.toggleTakeout = function() {
    if($scope.forHereView) {
      $scope.forHereView = false;
    }
    else {
      $scope.forHereView = true;
    }
  }

  orderDatabase.get_active_orders().then(function(response) {
    $scope.orders = response;
  });

  takeoutOrderDatabase.get_active_takeout_orders().then(function(response) {
    $scope.takeout_orders = response;
    for(var i = 0; i < $scope.takeout_orders.length; i++) {
      if($.inArray($scope.takeout_orders[i].takeout_name, $scope.takeout_order_names) == -1) {
        $scope.takeout_order_names.push($scope.takeout_orders[i].takeout_name);
      }
    }
  });

  // Returns all non-drinks matching the table number of ng-repeat inside open_orders.html
  $scope.getOrderByTable = function(tableNum) {
    var order = [];
    for(var i = 0; i < $scope.orders.length; i++) {
      if($scope.orders[i].sid == tableNum) {
        order.push($scope.orders[i]);
      }
    }
    return order;
  }

  // Returns the order matching the given name for a takeout order
  $scope.getOrderByName = function(name) {
    var order = [];
    for(var i = 0; i < $scope.takeout_orders.length; i++) {
      if($scope.takeout_orders[i].takeout_name == name) {
        order.push($scope.takeout_orders[i]);
      }
    }
    return order;
  }

  $scope.compThisItem = function(name, phone_no, old_price, new_price) {
    if(parseFloat(old_price) == 0.0) {
      alert("Item price is already $0.00.");
    }
    else {
      if($scope.forHereView) {
        orderDatabase.update_price(name, phone_no, new_price);
      }
      else {
        takeoutOrderDatabase.update_takeout_price(name, phone_no, new_price);
      }

      var negative_price = parseFloat(old_price) * -1;
      orderDatabase.insert_into_history("0000000000", negative_price);
      alert("Item comped.");
      $route.reload();
    }
  }

});

app.controller('managerLoyaltyController', function($scope) {
  $scope.pageName = "Modify Loyalty";
});

app.controller('managerLoyaltyAddController', function($scope, discountDatabase) {
  $scope.pageName = "Add New Loyalty Item";

  $scope.addToRewards = function(name_add, type_add, pt_add, disc_add, desc_add) {
    // Input checking
    if(type_add == '1') {
      type_add = 'appetizer';
    } else if (type_add == '2') {
      type_add = 'drink'
    } else if (type_add == '3') {
      type_add = 'entree';
    } else if (type_add == '4') {
      type_add = 'dessert';
    } else if (type_add == '5') {
      type_add = 'kidsmenu';
    }

    if(name_add == undefined || type_add == undefined || pt_add == undefined || disc_add == undefined || desc_add == undefined)
      alert("Please enter information for all fields.");
    else if(parseFloat(pt_add) < 0.0)
      alert("Point cost cannot be less than 0");
    // Add further input checks for now, such as apostrophes cuz gosh dang SQL errors

    // Add item if all input is fine
    else {
      var item_details = {
        name: name_add,
        description: desc_add,
        pt_cost: pt_add,
        type: type_add,
        discount_amt: disc_add,
      };
      discountDatabase.addReward(item_details);
      alert("Item added to loyalty rewards!");
    }
  }

});

app.controller('managerLoyaltyEditController', function($scope, discountDatabase) {
  $scope.pageName = "Edit Loyalty Item";

  // Get all the items from each category, manager chooses which to delete
  discountDatabase.getRewards("appetizer").then(function(response) {
      $scope.appetizers_rewards = response;
  });
  discountDatabase.getRewards("drink").then(function(response) {
      $scope.drinks_rewards = response;
  });
  discountDatabase.getRewards("entree").then(function(response) {
      $scope.entrees_rewards = response;
  });
  discountDatabase.getRewards("dessert").then(function(response) {
      $scope.desserts_rewards = response;
  });
  discountDatabase.getRewards("kidsmenu").then(function(response) {
      $scope.kidsmenu_rewards = response;
  });

  $scope.editRewardItem = function(name) {
    $scope.itemToEdit = name;
  }

  $scope.showItem = function(name) {
    if(name == $scope.itemToEdit)
      return true;
    return false;
  }

  $scope.submitEditReward = function(name_add, pt_add, disc_add, desc_add) {
    if(name_add == undefined || pt_add == undefined || disc_add == undefined || desc_add == undefined)
      alert("Please enter information for all fields.");
    else if(parseFloat(pt_add) < 0.0)
      alert("Point cost cannot be less than 0");
    // Add further input checks for now, such as apostrophes cuz gosh dang SQL errors

    // Add item if all input is fine
    else {
      var item_details = {
        original_name: $scope.itemToEdit,
        new_name: name_add,
        description: desc_add,
        pt_cost: pt_add,
        discount_amt: disc_add,
      };
      discountDatabase.editReward(item_details);
      alert("Item changed in loyalty rewards!");
    }
  }
});

app.controller('managerLoyaltyDeleteController', function($scope, discountDatabase) {
  $scope.pageName = "Delete Loyalty Item";

  // Get all the items from each category, manager chooses which to delete
  discountDatabase.getRewards("appetizer").then(function(response) {
      $scope.appetizers_rewards = response;
  });
  discountDatabase.getRewards("drink").then(function(response) {
      $scope.drinks_rewards = response;
  });
  discountDatabase.getRewards("entree").then(function(response) {
      $scope.entrees_rewards = response;
  });
  discountDatabase.getRewards("dessert").then(function(response) {
      $scope.desserts_rewards = response;
  });
  discountDatabase.getRewards("kidsmenu").then(function(response) {
      $scope.kidsmenu_rewards = response;
  });

  $scope.removeFromRewards = function(name) {
    console.log(name);
    discountDatabase.removeReward(name);
    alert("Item successfully removed from loyalty rewards!");
  }

});

app.controller('managerFeedController', function($scope, feedbackDatabase) {
  $scope.pageName = "Customer Feedback";
  $scope.feedback = [];

  feedbackDatabase.get_feedback().then(function(response) {
    $scope.feedback = response;
  });

});

app.controller('managerFinancialController', function($scope, orderDatabase) {
  $scope.pageName = "Financial Data";
  $scope.orders = [];
  $scope.all_orders = [];
  $scope.profits = 0.0;
  $scope.losses = 0.0;
  $scope.currentDate = new Date().getDate();
  console.log($scope.currentDate);
  $scope.currentMonth = new Date().getMonth()+1;
  console.log($scope.currentMonth);

  // Date stuff
  var weekLower = $scope.currentDate - 3;
  var weekHigher = $scope.currentDate + 3;

  // Initialization
  orderDatabase.get_order_history().then(function(response) {
    $scope.all_orders = response;
  });

  $scope.changeTab = function(tabName) {
    $scope.loadTab = tabName;

    $scope.orders = [];
    $scope.profits = 0.0;
    $scope.losses = 0.0;
    for(var i = 0; i < $scope.all_orders.length; i++) {
      // CURRENT DAY
      if($scope.loadTab == "daily") {
        if($scope.currentDate == new Date($scope.all_orders[i].date).getDate() || $scope.currentDate+1 == new Date($scope.all_orders[i].date).getDate()) {
          $scope.orders.push($scope.all_orders[i]);
          if(parseFloat($scope.all_orders[i].amt) < 0.0) {
            $scope.losses += parseFloat($scope.all_orders[i].amt);
          }
          else
            $scope.profits += parseFloat($scope.all_orders[i].amt);
        }
      }
      // CURRENT WEEK: hacky because it will only look 3 behind and 3 ahead o well
      if($scope.loadTab == "weekly") {
          if(new Date($scope.all_orders[i].date).getDate() >= weekLower && new Date($scope.all_orders[i].date).getDate() <= weekHigher) {
            $scope.orders.push($scope.all_orders[i]);
            if(parseFloat($scope.all_orders[i].amt) < 0.0) {
              $scope.losses += parseFloat($scope.all_orders[i].amt);
            }
            else
              $scope.profits += parseFloat($scope.all_orders[i].amt);
          }
      }
      // CURRENT MONTH
      if($scope.loadTab == "monthly") {
        if(new Date($scope.all_orders[i].date).getMonth()+1 == $scope.currentMonth) {
          $scope.orders.push($scope.all_orders[i]);
          if(parseFloat($scope.all_orders[i].amt) < 0.0) {
            $scope.losses += parseFloat($scope.all_orders[i].amt);
          }
          else
            $scope.profits += parseFloat($scope.all_orders[i].amt);

        }
      }
      // ALL
      if($scope.loadTab == "all") {
        $scope.orders.push($scope.all_orders[i]);
        if(parseFloat($scope.all_orders[i].amt) < 0.0) {
          $scope.losses += parseFloat($scope.all_orders[i].amt);
        }
        else
          $scope.profits += parseFloat($scope.all_orders[i].amt);
      }
    }
  }

  $scope.wasComp = function(price) {
    if(parseFloat(price) < 0)
      return true;
    return false;
  }

});

/* Kitchen */
app.controller('kitchenStaffController', function($scope) {
  $scope.pageName = "Kitchen Staff";
});

app.controller('kitchenStaffFeedController', function($scope, feedbackDatabase) {
  $scope.pageName = "Customer Feedback";
  $scope.feedback = [];

  feedbackDatabase.get_feedback().then(function(response) {
    $scope.feedback = response;
    $scope.allowedFeedback = [];
    for(var i = 0; i < $scope.feedback.length; i++) {
      if($scope.feedback[i].manageronly == '0') {
        $scope.allowedFeedback.push($scope.feedback[i]);
      }
    }
  });

});

app.controller('kitchenStaffOrdersController', function($scope, orderDatabase, takeoutOrderDatabase) {
  $scope.pageName = "Open Orders";
  $scope.tables = 24;
  $scope.orders = [];
  $scope.takeout_orders = [];
  $scope.takeout_order_names = [];
  $scope.forHereView = true;

  // Specifies size of table for ng-repeat, only accepts arrays
  $scope.getTableAmount = function () {
    return new Array($scope.tables);
  }

  $scope.showForHere = function() {
    return $scope.forHereView;
  }

  $scope.toggleTakeout = function() {
    if($scope.forHereView) {
      $scope.forHereView = false;
    }
    else {
      $scope.forHereView = true;
    }
  }

  orderDatabase.get_active_orders().then(function(response) {
    $scope.orders = response;
  });

  takeoutOrderDatabase.get_active_takeout_orders().then(function(response) {
    $scope.takeout_orders = response;
    for(var i = 0; i < $scope.takeout_orders.length; i++) {
      if($.inArray($scope.takeout_orders[i].takeout_name, $scope.takeout_order_names) == -1) {
        $scope.takeout_order_names.push($scope.takeout_orders[i].takeout_name);
      }
    }
  });

  // Returns all non-drinks matching the table number of ng-repeat inside open_orders.html
  $scope.getOrderByTable = function(tableNum) {
    var order = [];
    for(var i = 0; i < $scope.orders.length; i++) {
      if($scope.orders[i].sid == tableNum && $scope.orders[i].type != 'drink') {
        order.push($scope.orders[i].item_name);
      }
    }
    return order;
  }

  // Returns the order matching the given name for a takeout order
  $scope.getOrderByName = function(name) {
    var order = [];
    for(var i = 0; i < $scope.takeout_orders.length; i++) {
      if($scope.takeout_orders[i].takeout_name == name && $scope.takeout_orders[i].type != 'drink') {
        order.push($scope.takeout_orders[i].item_name);
      }
    }
    return order;
  }

});

/* Waitstaff */
app.controller('waitStaffController', function($scope, orderDatabase, takeoutOrderDatabase, customerData) {
  $scope.pageName = "Wait Staff";
  $scope.tables = 24;
  $scope.orders = [];
  $scope.takeout_orders = [];
  $scope.takeout_order_names = [];
  $scope.forHereView = true;

  // Specifies size of table for ng-repeat, only accepts arrays
  $scope.getTableAmount = function () {
    return new Array($scope.tables);
  }

  $scope.showForHere = function() {
    return $scope.forHereView;
  }

  $scope.toggleTakeout = function() {
    if($scope.forHereView) {
      $scope.forHereView = false;
    }
    else {
      $scope.forHereView = true;
    }
  }

  orderDatabase.get_active_orders().then(function(response) {
    $scope.orders = response;
  });

  takeoutOrderDatabase.get_active_takeout_orders().then(function(response) {
    $scope.takeout_orders = response;
    for(var i = 0; i < $scope.takeout_orders.length; i++) {
      if($.inArray($scope.takeout_orders[i].takeout_name, $scope.takeout_order_names) == -1) {
        $scope.takeout_order_names.push($scope.takeout_orders[i].takeout_name);
      }
    }
  });

  // Returns all drinks matching a table number
  $scope.getOrderByTable = function(tableNum) {
    var order = [];
    for(var i = 0; i < $scope.orders.length; i++) {
      if($scope.orders[i].sid == tableNum && $scope.orders[i].type == 'drink') {
        order.push($scope.orders[i].item_name);
      }
    }
    return order;
  }

  // Returns the order matching the given name for a takeout order
  $scope.getOrderByName = function(name) {
    var order = [];
    for(var i = 0; i < $scope.takeout_orders.length; i++) {
      if($scope.takeout_orders[i].takeout_name == name && $scope.takeout_orders[i].type == 'drink') {
        order.push($scope.takeout_orders[i].item_name);
      }
    }
    return order;
  }

  // Returns all help requests matching the table number of ng-repeat inside waitstaff.html
  $scope.getHelpByTable = function(tableNum) {
    var help = customerData.getHelpRequests();
    for(var i = 0; i < help.length; i++) {
      console.log("id= " + help[i].ID + " and needsHelp = " + help[i].needsHelp);
      if(help[i].ID == tableNum && help[i].needsHelp == true) {
        console.log("table needs help");
        return true;
      }
    }
  }

});

app.controller('waitStaffRefillController', function($scope) {
  $scope.pageName = "Refill Requests";
});

/* Menu */
app.controller('menuController', function($scope, customerData) {
  if(customerData.getChosenOrderType()) {
    $scope.pageName = "Menu";
  }
  else {
    $scope.pageName = "Select Order Type";
  }

  $scope.cost = customerData.getCost();
  $scope.t_id = '';
  $scope.t_name = '';

  $scope.hasChosenOrderType = function() {
    return customerData.getChosenOrderType();
  }

  $scope.orderTypeChosen = function(order_type, identifier) {
    if(order_type == 'takeout') {
      customerData.setTakeoutName(identifier);
      if(customerData.getTakeoutName().length > 0) {
        $scope.pageName = "Menu";
      }
      console.log(customerData.getTakeoutName());
    }
    else {
      customerData.setTableId(identifier);
      if(customerData.getTableId() != 0) {
        $scope.pageName = "Menu";
      }
      console.log(customerData.getTableId());
    }
  }
});

app.controller('menuAppetizersController', function($scope, customerData, menuDatabase) {
  $scope.pageName = "Appetizers";
  $scope.type = "appetizer";
  $scope.old_price = "";
  $scope.cost = customerData.getCost();

  // Pull from DB, wait for it to finish
  menuDatabase.pullDb("appetizer").then(function(response) {
      $scope.items = response;
      for(var i = 0; i < $scope.items.length; i++) {
        if($scope.items[i].iotd == "1") {
          var priceAsFloat = parseFloat($scope.items[i].price);
          $scope.old_price = $scope.items[i].price;

          $scope.items[i].price = (priceAsFloat - (.10 * priceAsFloat)).toString();
        }
      }
  });

  $scope.add = function(name, price, type, iotd) {
    var floatPrice = parseFloat(price);
    // Add it to cart with either their takeout name or table number
    // For takeout
    if(customerData.getForTakeout()) {
      customerData.addToCart(customerData.getPhoneNo(), customerData.getTakeoutName(), name, floatPrice, type, iotd);
    }
    // For here
    else {
      customerData.addToCart(customerData.getPhoneNo(), customerData.getTableId(), name, floatPrice, type, iotd);
    }
    $scope.cost = customerData.getCost();

  }

});

app.controller('menuDrinksController', function($scope, customerData, menuDatabase) {
  $scope.pageName = "Drinks";
  $scope.type = "drink";
  $scope.old_price = "";
  $scope.cost = customerData.getCost();

  menuDatabase.pullDb("drink").then(function(response) {
      $scope.items = response;
      for(var i = 0; i < $scope.items.length; i++) {
        if($scope.items[i].iotd == "1") {
          var priceAsFloat = parseFloat($scope.items[i].price);
          $scope.old_price = $scope.items[i].price;

          $scope.items[i].price = (priceAsFloat - (.10 * priceAsFloat)).toString();
        }
      }
  });

  $scope.add = function(name, price, type, iotd) {
    var floatPrice = parseFloat(price);
    // Add it to cart with either their takeout name or table number
    // For takeout
    if(customerData.getForTakeout()) {
      customerData.addToCart(customerData.getPhoneNo(), customerData.getTakeoutName(), name, floatPrice, type, iotd);
    }
    // For here
    else {
      customerData.addToCart(customerData.getPhoneNo(), customerData.getTableId(), name, floatPrice, type, iotd);
    }
    $scope.cost = customerData.getCost();

  }
});

app.controller('menuEntreesController', function($scope, customerData, menuDatabase) {
  $scope.pageName = "Entrees";
  $scope.type = "entree";
  $scope.old_price = "";
  $scope.cost = customerData.getCost();

  menuDatabase.pullDb("entree").then(function(response) {
      $scope.items = response;
      for(var i = 0; i < $scope.items.length; i++) {
        if($scope.items[i].iotd == "1") {
          var priceAsFloat = parseFloat($scope.items[i].price);
          $scope.old_price = $scope.items[i].price;

          $scope.items[i].price = (priceAsFloat - (.10 * priceAsFloat)).toString();
        }
      }
  });
  $scope.add = function(name, price, type, iotd) {
    var floatPrice = parseFloat(price);
    // Add it to cart with either their takeout name or table number
    // For takeout
    if(customerData.getForTakeout()) {
      customerData.addToCart(customerData.getPhoneNo(), customerData.getTakeoutName(), name, floatPrice, type, iotd);
    }
    // For here
    else {
      customerData.addToCart(customerData.getPhoneNo(), customerData.getTableId(), name, floatPrice, type, iotd);
    }
    $scope.cost = customerData.getCost();

  }
});

app.controller('menuDessertsController', function($scope, customerData, menuDatabase) {
  $scope.pageName = "Desserts";
  $scope.type = "dessert";
  $scope.old_price = "";
  $scope.cost = customerData.getCost();

  menuDatabase.pullDb("dessert").then(function(response) {
      $scope.items = response;
      for(var i = 0; i < $scope.items.length; i++) {
        if($scope.items[i].iotd == "1") {
          var priceAsFloat = parseFloat($scope.items[i].price);
          $scope.old_price = $scope.items[i].price;

          $scope.items[i].price = (priceAsFloat - (.10 * priceAsFloat)).toString();
        }
      }
  });

  $scope.add = function(name, price, type, iotd) {
    var floatPrice = parseFloat(price);
    // Add it to cart with either their takeout name or table number
    // For takeout
    if(customerData.getForTakeout()) {
      customerData.addToCart(customerData.getPhoneNo(), customerData.getTakeoutName(), name, floatPrice, type, iotd);
    }
    // For here
    else {
      customerData.addToCart(customerData.getPhoneNo(), customerData.getTableId(), name, floatPrice, type, iotd);
    }
    $scope.cost = customerData.getCost();

  }
});

app.controller('menuKidsController', function($scope, customerData, menuDatabase) {
  $scope.pageName = "Kid's Menu";
  $scope.type = "kidsmenu";
  $scope.old_price = "";
  $scope.cost = customerData.getCost();

  menuDatabase.pullDb("kidsmenu").then(function(response) {
      $scope.items = response;
      for(var i = 0; i < $scope.items.length; i++) {
        if($scope.items[i].iotd == "1") {
          var priceAsFloat = parseFloat($scope.items[i].price);
          $scope.old_price = $scope.items[i].price;
          $scope.items[i].price = (priceAsFloat - (.10 * priceAsFloat)).toString();
        }
      }
  });

  $scope.add = function(name, price, type, iotd) {
    var floatPrice = parseFloat(price);
    // Add it to cart with either their takeout name or table number
    // For takeout
    if(customerData.getForTakeout()) {
      customerData.addToCart(customerData.getPhoneNo(), customerData.getTakeoutName(), name, floatPrice, type, iotd);
    }
    // For here
    else {
      customerData.addToCart(customerData.getPhoneNo(), customerData.getTableId(), name, floatPrice, type, iotd);
    }
    $scope.cost = customerData.getCost();

  }
});

/* Games */
app.controller('gamesController', function($scope) {
  $scope.pageName = "Games";
});

app.controller('gamesConnectFourController', function($scope) {
  $scope.pageName = "Connect Four";
});

app.controller('gamesPongController', function($scope) {
  $scope.pageName = "Pong";
});

app.controller('gamesTTTController', function($scope) {
  $scope.pageName = "Tic-Tac-Toe";
});

app.controller('gamesTetrisController', function($scope) {
  $scope.pageName = "Tetris";
});

/* Loyalty */
app.controller('loyaltyController', function($scope, $window, customerData, loyaltyDatabase) {
  $scope.pageName = "Loyalty Login";

  if(customerData.getPhoneNo() != '0000000000') {
    window.location.href = "/spaghetti/public_html/#/loyalty/profile";
  }

  $scope.phone_id = "";
  $scope.counter = 0;

  $scope.appendVal = function(val) {
    if($scope.counter < 10) {
      $scope.phone_id += val;
      $scope.counter++;
    }
    else {
      alert("No more numbers allowed");
    }
  }
  $scope.backspaceVal = function() {
    $scope.phone_id = $scope.phone_id.substring(0, $scope.phone_id.length - 1);
    $scope.counter--;
  }

  $scope.loyalty_login = function() {
    if($scope.counter != 10) {
      alert("Invalid input; please enter a full phone number (10 digits)");
      $scope.phone_id = "";
      $scope.counter = 0;
    }
    else {
      loyaltyDatabase.get_profile($scope.phone_id).then(function(response) {
          if(response.records.length == 1) {
            customerData.setPhoneNo($scope.phone_id);
            window.location.href = "/spaghetti/public_html/#/loyalty/profile";
          }
          else {
            alert("No account exists for phone number " + $scope.phone_id);
            $scope.phone_id = "";
            $scope.counter = 0;
          }
      });
    }
  }

  $scope.loyalty_signup = function() {
    console.log($scope.phone_id);
    if($scope.counter != 10) {
      alert("Please enter a valid phone number (10 digits), and then press the Sign Up button.");
    }
    else {
      loyaltyDatabase.get_profile($scope.phone_id).then(function(response) {
          if(response.records.length == 1) {
            alert("An account already exists for that number.");
            $scope.phone_id = "";
            $scope.counter = 0;
          }
          else {
            alert("Sign-Up successful! You can now login using that phone number.");
            loyaltyDatabase.signup_profile($scope.phone_id);
          }
      });
    }
  }

});

app.controller('loyaltyProfileController', function($scope, customerData, loyaltyDatabase) {
  $scope.pageName = "Loyalty Profile";
  // Load the profile with the phone number used to log in
  loyaltyDatabase.get_profile(customerData.getPhoneNo()).then(function(response) {
      $scope.pts = response.records[0].pts;
      customerData.setPts($scope.pts);
      $scope.phone = response.records[0].phone_no;
      customerData.setPhoneNo($scope.phone);
  });

});

app.controller('loyaltyRedeemController', function($scope, $route, customerData, orderDatabase, takeoutOrderDatabase, discountDatabase, loyaltyDatabase) {
  $scope.pageName = "Redeem Loyalty Points";

  discountDatabase.getRewards("appetizer").then(function(response) {
      $scope.appetizers_rewards = response;
  });
  discountDatabase.getRewards("drink").then(function(response) {
      $scope.drinks_rewards = response;
  });
  discountDatabase.getRewards("entree").then(function(response) {
      $scope.entrees_rewards = response;
  });
  discountDatabase.getRewards("dessert").then(function(response) {
      $scope.desserts_rewards = response;
  });
  discountDatabase.getRewards("kidsmenu").then(function(response) {
      $scope.kidsmenu_rewards = response;
  });

  /* this is a function that expects the type of the discount and disc_amt
     this assumes that discounts are ONLY type based, which is fine for now */
  $scope.loyalty_redeem = function(pts_req, type_f, disc_amt) {
    if(customerData.getPts() < parseInt(pts_req)){
      alert('Not enough loyalty points...Buy some more spaghetti!!!');
      return;
    } else if (customerData.getUsedLoyalty()){
      alert('You have already redeemed a Loyalty reward for this order!');
      return;
    }
    var item_to_discount = customerData.getHighestItemofType(type_f);
    if(typeof item_to_discount === 'undefined'){
      alert('Unable to find an item to apply reward to! Please check \'Your Bill\'.');
      return;
    } else {
      console.log('item_to_discount:' + item_to_discount);
      var original_price = parseFloat(item_to_discount.price);
      item_to_discount.price = disc_amt;
      var savings = original_price-disc_amt;
      if(customerData.getForTakeout()) {
        takeoutOrderDatabase.update_takeout_item_price(item_to_discount.item_name, item_to_discount.phone_no, parseFloat(disc_amt));
      }
      else {
        orderDatabase.update_ordered_item_price(item_to_discount.item_name, item_to_discount.phone_no, parseFloat(disc_amt));
      }
      customerData.setPts(customerData.getPts()-pts_req);
      loyaltyDatabase.update_points(item_to_discount.phone_no, customerData.getPts());
      customerData.setUsedLoyalty(true);
      alert('Redeemed reward for ' + pts_req + ' loyalty points!\nItem discounted: ' + item_to_discount.item_name + '\nYou save: $' + savings.toFixed(2));
      $route.reload();
    }
  }
});

app.controller('loyaltyHistoryController', function($scope, customerData, orderDatabase) {
  $scope.pageName = "Order History";
  orderDatabase.get_order_history_loyalty(customerData.getPhoneNo()).then(function(response){
    $scope.order_history = response;
  });
});

/* Your Order */
app.controller('your_orderController', function($scope, $route, $window, customerData) {
  $scope.pageName = "Your Order";
  $scope.cart = customerData.getCart();
  $scope.cost = customerData.getCost();
  console.log("order cost: ");
  console.log($scope.cost);

  // Only print section headers if they have items from that section (appetizers/drinks/etc)
  $scope.hasSection = function(section) {
    for(var i = 0; i < $scope.cart.length; i++) {
      if($scope.cart[i].type == section)
        return true;
    }
    return false;
  }

  $scope.removeItem = function(name) {
      customerData.removeFromYourOrder(name);
      $route.reload()
  }

  // Submits their order to their bill and clears their order
  $scope.orderPlaced = function() {
    customerData.addToBill();
    $route.reload();
    $window.alert("Order Successfully Placed!");
  }
});


/* Your Bill */
app.controller('your_billController', function($scope, customerData, orderDatabase, takeoutOrderDatabase) {
  $scope.pageName = "Your Bill";
  $scope.bill_info = [];
  $scope.bill = 0.0;

  if(customerData.getForTakeout()) {
    takeoutOrderDatabase.get_active_takeout_orders().then(function(response) {
      $scope.tmp = response;
      for(var i = 0; i < $scope.tmp.length; i++) {
        if($scope.tmp[i].takeout_name == customerData.getTakeoutName() && $scope.tmp[i].phone_no == customerData.getPhoneNo()) {
          $scope.bill_info.push($scope.tmp[i]);
          $scope.bill += parseFloat($scope.tmp[i].price);
        }
      }
    });
  }

  else {
    orderDatabase.get_active_orders().then(function(response) {
      $scope.tmp = response;
      for(var i = 0; i < $scope.tmp.length; i++) {
        if($scope.tmp[i].sid == customerData.getTableId() && $scope.tmp[i].phone_no == customerData.getPhoneNo()) {
          $scope.bill_info.push($scope.tmp[i]);
          $scope.bill += parseFloat($scope.tmp[i].price);
        }
      }
    });
  }

  // Only print section headers if they have items from that section (appetizers/drinks/etc)
  $scope.hasSectionBill = function(section) {
    for(var i = 0; i < $scope.bill_info.length; i++) {
      if($scope.bill_info[i].type == section)
        return true;
    }
    return false;
  }
});


app.controller('your_billPayController', function($scope, customerData, orderDatabase, takeoutOrderDatabase, feedbackDatabase, loyaltyDatabase, couponDatabase) {
  $scope.pageName = "Pay";
  $scope.bill_info = [];
  $scope.bill = 0.0;
  $scope.pts_earned = 0;
  $scope.managerOnly = '1';
  $scope.couponMsg = "";
  $scope.payment_type = "";
  $scope.card_owner = "";
  $scope.card_cvv = "";
  $scope.card_number = "";
  $scope.coupon_code = "";

  if(customerData.getForTakeout()) {
    takeoutOrderDatabase.get_active_takeout_orders().then(function(response) {
      $scope.tmp = response;
      for(var i = 0; i < $scope.tmp.length; i++) {
        if($scope.tmp[i].takeout_name == customerData.getTakeoutName() && $scope.tmp[i].phone_no == customerData.getPhoneNo()) {
          $scope.bill_info.push($scope.tmp[i]);
          $scope.bill += parseFloat($scope.tmp[i].price);
        }
      }
      // Calculate tip percentages and points earned, before discounts
      $scope.pts_earned = parseInt(10 * $scope.bill);
      $scope.tip_15 = $scope.bill * 0.15;
      $scope.tip_20 = $scope.bill * 0.20;
      $scope.tip_25 = $scope.bill * 0.25;

      // Check if they have redeemed a coupon or not before so it is maintained if they accidentally left the page or added more items to their bill
      if(customerData.getUsedCoupon()) {
        $scope.bill -= ($scope.bill * .10);
      }
    });
  }

  else {
    orderDatabase.get_active_orders().then(function(response) {
      $scope.tmp = response;
      for(var i = 0; i < $scope.tmp.length; i++) {
        if($scope.tmp[i].sid == customerData.getTableId() && $scope.tmp[i].phone_no == customerData.getPhoneNo()) {
          $scope.bill_info.push($scope.tmp[i]);
          $scope.bill += parseFloat($scope.tmp[i].price);
        }
      }
      // Calculate tip percentages and points earned, before discounts
      $scope.pts_earned = parseInt(10 * $scope.bill);
      $scope.tip_15 = $scope.bill * 0.15;
      $scope.tip_20 = $scope.bill * 0.20;
      $scope.tip_25 = $scope.bill * 0.25;

      // Check if they have redeemed a coupon or not before so it is maintained if they accidentally left the page or added more items to their bill
      if(customerData.getUsedCoupon()) {
        $scope.bill -= ($scope.bill * .10);
      }
    });
  }

  // Toggle box for sending feedback to kitchen in addition to manager
  $scope.feedbackKitchen = function() {
    if($scope.managerOnly == '1')
      $scope.managerOnly = '0';
    else if($scope.managerOnly == '0')
      $scope.managerOnly = '1';
    console.log($scope.managerOnly);
  }

  // Display different information if they are logged in to their loyalty account or not
  $scope.loggedInLoyalty = function() {
    if(customerData.getPhoneNo() == "0000000000")
      return false;
    return true;
  }

  // Redeem a coupon code
  $scope.redeemCoupon = function() {
    // Check for empty coupon codes
    if($scope.coupon_code.length == 0) {
      $scope.couponMsg = "Please enter a coupon code and try again.";
    }
    // Make sure they haven't redeemed a 10% already
    else if(customerData.getUsedCoupon()) {
      $scope.couponMsg = "You have already applied a coupon to this order.";
    }
    // Check if coupon code is valid, apply if it is and delete it from the database. Otherwise inform them coupon is not valid
    else {
      couponDatabase.get_coupons($scope.coupon_code).then(function(response) {
        if(typeof response == "undefined") {
          $scope.couponMsg = "Coupon code does not exist!";
        }
        else {
          $scope.bill -= ($scope.bill * .10);
          $scope.couponMsg = "Coupon code is valid! 10% off order has been applied. New total: $" + $scope.bill.toFixed(2);
          customerData.setUsedCoupon(true);
          // Delete code from coupon database since it has been redeemed, always keep SPAHGET01 for testing purposes
          if(code != "SPAGHET01") {
            couponDatabase.delete_coupon($scope.coupon_code);
          }
        }
      });
    }
  }

  // Submit payment and validate information
  $scope.sendOffToEverything = function(comment, tip_amt) {
    if($scope.bill_info.length == 0) {
      alert("You have not placed any orders.")
    }
    else {
      var paymentInfoGood = true;
      // Validate credit card input if user is paying w/ card
      if($scope.payment_type == 'card') {
        if($scope.card_owner.length == 0) {
          alert("Card owner name cannot be left empty.");
          paymentInfoGood = false;
        }
        else if($scope.card_cvv.length == 0) {
          alert("Card CVV cannot be left empty.");
          paymentInfoGood = false;
        }
        else if($scope.card_number.length < 16) {
          alert("Invalid card number entry.");
          paymentInfoGood = false;
        }
      }

      // Validate tip input
      if(parseFloat(tip_amt) < 0.0) {
        alert("Tip cannot be negative, please enter a new value and try again.");
      }

      else if(paymentInfoGood){
        if(typeof comment != "undefined") {
          feedbackDatabase.insert_feedback(comment, customerData.getTableId(), $scope.managerOnly);
        }

        // mark items off as inactive
        if(customerData.getForTakeout()) {
          takeoutOrderDatabase.update_active_takeout_orders(customerData.getTakeoutName());
        }
        else {
          orderDatabase.update_active_orders(customerData.getTableId());
        }
        // send to order history
        var phone = customerData.getPhoneNo();
        var amt = $scope.bill;
        console.log("Inserting into order history");
        console.log(phone, amt);
        orderDatabase.insert_into_history(phone, amt);

        // LOYALTY: assign points
        var phone = customerData.getPhoneNo();
          if(phone != "0000000000") {
            var current_pts = customerData.getPts();
            var new_pts = parseInt(current_pts) + parseInt($scope.pts_earned);
            console.log("Assigning new info for loyalty:");
            console.log(phone, new_pts);
            loyaltyDatabase.update_points(phone, new_pts);
        }

        // 1 in 5 chance to give a coupon code for 10% off their next order
        var giveCode = Math.random();
        if(giveCode < 0.2) {
          // Generate a random string for coupon code
          var codeGenerated = Math.random().toString(36).substr(2, 9);
          confirm("Congratulations! You won a coupon. Redeem this at your next visit for 10% off your order. Write it down somewhere! Code: " + codeGenerated);
          couponDatabase.insert_coupon(codeGenerated);
        }
        else {
          console.log("No coupon code generated =[")
        }

        alert("Payment received! Thanks for eating at Spaghetti Empire!");
        window.location.href = "/spaghetti/public_html/";

      }
    }
  }

});

app.controller('your_billSplitController', function($scope, customerData, orderDatabase) {
  $scope.pageName = "Split Bill";
  $scope.bill_info = [];
  $scope.bill = 0.0;
  orderDatabase.get_active_orders().then(function(response) {
    $scope.tmp = response;
    for(var i = 0; i < $scope.tmp.length; i++) {
      if($scope.tmp[i].sid == customerData.getTableId() && $scope.tmp[i].phone_no == customerData.getPhoneNo()) {
        $scope.bill_info.push($scope.tmp[i]);
        $scope.bill += parseFloat($scope.tmp[i].price);
      }
    }
  });

  $scope.hasSectionBill = function(section) {
    for(var i = 0; i < $scope.bill_info.length; i++) {
      if($scope.bill_info[i].type == section)
        return true;
    }
    return false;
  }


  $scope.RemoveItemFromBill = function(name) {
    console.log(name);
    var index = $scope.bill_info.indexOf(name);
    // $scope.bill_info.RemoveFromBill(""); TODO
    customerData.removeFromCart(index);
  }
});
