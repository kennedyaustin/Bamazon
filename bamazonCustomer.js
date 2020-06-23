// Requiring packages
const inquirer= require('inquirer')
const mysql= require('mysql2')

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "Shadow4592",
    database: "bamazon"
});

// ---------------------------------- Inventory -------------------------------------------

function storeInventory() {

    let inventory= 'select * from products'
    connection.query(inventory, function(error, product) {

        if (error) throw error
        // This for loop will grab the item id, product name, and price before showing it to the 
        // user in a table in the terminal
        console.log('\n---------------------- Please browse our wares before making your decision. ----------------------\n')
        for (let i = 0; i < product.length; i++) {

            console.table(`Item ID: ${product[i].item_id}  |  Item: ${product[i].product_name}  |  Price: ${product[i].price}`)

        }
    })
    whatUserWants()
}
storeInventory()

// ----------------------------------- Prompt User to Buy Something -------------------------------------

function whatUserWants() {

    inquirer
  .prompt([
    {
        type: 'input',
        name: 'itemID',
        message: 'Please enter the item ID for the item you would like to purchase!',
        // This will make sure that the user has to type a number into the terminal
        validate: function(value) {

            if (isNaN(value) === false) {
                return true
            } else {
                return false 
            }
        }
    }, {
        type: 'input',
        name: 'numberofUnits',
        message: 'How many of this item would you like to buy?',
        validate: function(value) {

            if (isNaN(value) === false) {
                return true
            } else {
                console.log('Please input an item ID number that you would like to purchase!')
                return false 
            }
        }
    }
  ])
  .then(userInput => {
    
    // This will grab the items that the user chooses and run it through the for loop below
    connection.query('select * from products where item_id= ?', userInput.itemID, function(error, product) {

        // For each product the user chooses, they will be shown one of the two messages shown inside the if statement
        for (let i = 0; i < product.length; i++) {

            // If the user orders more than the store currently has in stock the will be shown this message
            if (userInput.numberofUnits > product[i].stock_quantity) {

                console.log('\n----------- Sorry for the inconvenience, we do not have enough inventory in stock to fulfill your order!-----------\n')
                storeInventory()

            //  If the store has enough in stock of the item the user chooses, they will be shown this information
            } else {

                let quantity= product.quantity
                console.log('\nYou have selected: \n')
                console.log(`Item: ${product[i].product_name}\nQuantity: ${userInput.numberofUnits}\nPrice per item: $${product[i].price}\nTotal: $` + (product[i].price * userInput.numberofUnits))

                // This builds the query string so that I don't have to do so in the connection.query below
                let updateInventory= 'update products set stock_quantity = ' + (product.stock_quantity - quantity) + ' where item_id = ' + userInput.item_id
                // This will update the inventory depending on what the user chose to buy
                connection.query(updateInventory, function(error, stock) {

                    console.log('\nYour order has been placed! Your total is $' + product[i].price * userInput.numberofUnits + 
                                '\nThank you for shopping at Bamazon!\n');

                    connection.end()

                })
                
            }
        }
    })
  })
}

let confirmPurchase= function() {

    let query= 'select '

}