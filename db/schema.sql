-- Create initial burgers_db
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

-- Use burger_db
USE burgers_db;

-- Create a new table to hold the id, burger_name, and devoured state
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured BOOLEAN default FALSE,
	PRIMARY KEY (id)
);