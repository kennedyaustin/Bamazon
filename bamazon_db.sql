drop database if exists bamazon;
create database bamzon;
use bamazon;

create table products (
id int auto_increment primary key,
product_name varchar(100) not null,
department_name varchar(75) not null,
price decimal(10,4) not null,
stock_quantity int not null
);

insert into products(product_name, department_name, 
price, stock_quantity)
values('Cheese', 'Dairy', 5.00, 10);