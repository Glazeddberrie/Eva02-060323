CREATE DATABASE IF NOT EXISTS albo_store;

USE albo_store;

CREATE TABLE merch (
    serial INT UNIQUE NOT NULL,
    merchType VARCHAR(30) NOT NULL,
    merchSize VARCHAR(30) NOT NULL,
    stock INT NOT NULL,
    price INT NOT NULL,
    model VARCHAR(100),
    PRIMARY KEY (serial)
);

CREATE TABLE client (
    id INT UNIQUE NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    pass VARCHAR(32) NOT NULL,
    rut VARCHAR(13) NOT NULL UNIQUE,
    phone_number VARCHAR(9) NOT NULL UNIQUE,
    PRIMARY KEY (rut)
);

--Admin lleva 1 en charge y chamber lleva 2 en charge--
CREATE TABLE chamber (
    id INT UNIQUE NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    rut INT UNIQUE NOT NULL,
    charge INT NOT NULL,
    password VARCHAR(32) NOT NULL,
    username VARCHAR(128) NOT NULL UNIQUE,
    PRIMARY KEY (rut)

);

CREATE TABLE orders (
    id INT UNIQUE NOT NULL,
    creationDate DATE NOT NULL,
    serial INT NOT NULL,
    price INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (email) REFERENCES client (email),
    FOREIGN KEY (serial) REFERENCES merch (serial)
);


