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