CREATE DATABASE Trafico;

USE Trafico;

CREATE TABLE usuario(
  id INTEGER PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  message VARCHAR(200) NOT NULL,
  create_at DATE,
  update_at DATE
); 