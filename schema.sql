DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,

  product_name VARCHAR(30) NOT NULL,

  department_name VARCHAR(30) NOT NULL,

  price DECIMAL(10,2),

  stock_quantity INTEGER(30),

  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PS4", "Electronics", 499.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("WII", "Electronics", 299.99, 140);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("XBOX", "Electronics" , 499.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MACBOOK PRO", "Electronics", 2399.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("APPLE WATCH", "Electronics", 599.99, 700);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("IPAD", "Electronics" , 799.99, 900);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NINTENDO DS", "Electronics", 199.99, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("SAMSUNG VIVE", "Electronics", 899.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("50 SAMSUNG TV", "Electronics", 1599.99, 700);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("IPOD", "Electronics" , 399.99, 800);

