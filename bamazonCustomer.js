var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({

  host:"localhost",
  port: 3306,
  user:"root",
  password: "Candelabra01!",
  database: "bamazon_DB",
  multipleStatements: true
});
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   console.log("I have connected to mysql!");
//   connection.end();
// });




function inventTable() {
  // var query = "SELECT * FROM products";
  connection.query("SELECT*FROM products", function(err, res){
    if(err) throw err;

    //Display Table

    var tabOutput = "";
    for(var i = 0; i < res.length; i++) {

      tabOutput = "";
      tabOutput += "Id:" + res[i].item_id + "|";
      tabOutput += "Product Name:" + res[i].product_name + "|";
      tabOutput += "Department Name:" + res[i].department_name + "|";
      tabOutput += "Price:" + res[i].price + "|";
      tabOutput += "Quantity:" + res[i].stock_quantity + "|";

      console.log(tabOutput);
    }

    userPrompt();

  })
}

function userPrompt() {

  inquirer.prompt([
    {
      type: 'input',
      name: 'item_id',
      message: 'Please enter the item_id which you would like to purchase.'
    },
    {
      type: 'input',
      name: 'quantity',
      message: 'How many do you want?'
    }
  ]).then(function(response) {
      // console.log(response.item_id);
      // console.log(response.item_id);
      var item = response.item_id;
      var quantity = response.quantity;
      var query = "SELECT * FROM products WHERE ?";
      // console.log(query);
      console.log(quantity);

      connection.query(query, {item_id:item}, function(err, res) {
        if(err) throw err;

          if(quantity <= res[0].stock_quantity) {
            var queryUpdate = "UPDATE products SET stock_quantity = " + (res[0].stock_quantity - quantity) + " WHERE item_id = " + item;
            // console.log(queryUpdate);
            connection.query(queryUpdate, function(err, res) {
              if(err) throw err;
              connection.end();
            })
          }else 
            inventTable();
      })  
    })
}

function runBamazon() {

  inventTable();
}

runBamazon();



