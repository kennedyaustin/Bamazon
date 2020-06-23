const inquirer= require('inquirer')
const mysql= require('mysql2')

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Shadow4592",
    database: "bamazon"
});

// This function will handle the inventory that is shown to the consumer before they are prompted to 
// choose an item id to add to their cart
function displayInventory() {

    inventory= 'select * from products'
    connection.query(inventory, function(error, product) {

        if (error) throw error

        console.log('Welcome to Greenix! Please browse our wares before making your decision.')
        for (let i = 0; i < product.length; i++) {

            console.table(`Item ID: ${product[i].item_id}  |  Item: ${product[i].product_name}  |  Price: ${product[i].price}`)

        }

    })

}

displayInventory();
// function userBuying() {

//     inquirer
//   .prompt([
//     {
//         type: 'list',
//         name: 'buyItem',
//         message: 'Welcome to Greenix! Please browse our items before making your choice.',
        
//         // validate: validateInput,
//         // filter: Number
//     }
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   })
//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else when wrong
//     }
//   });

// }