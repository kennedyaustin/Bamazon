create database bamazon;
use bamazon;

create table products (
item_id int auto_increment primary key,
product_name varchar(100) not null,
department_name varchar(75) not null,
price decimal(10,2) not null,
stock_quantity int not null
);

insert into products(product_name, department_name, 
price, stock_quantity)
values('12-Count American Cheese', 'Dairy', 2.00, 10),
	  ('Deodorant', 'Self Care', 4.00, 5),
      ('Bunny Tracks', "Ice-cream", 7.00, 3),
      ('Crest Tooth Paste', 'Self Care', 3.00, 10),
      ('Gillette Razors', 'Self Care', 10.00, 15),
      ('Chocolate Milk', 'Dairy', 3.20, 20),
      ('12-Count Provolone Cheese', 'Dairy', 2.00, 20),
      ('Basketball', 'Sports', 15.00, 50),
      ('Football', 'Sports', 20, 55),
      ('7-iron', 'Sports', 70, 3);
