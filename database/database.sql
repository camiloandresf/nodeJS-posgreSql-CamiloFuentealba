CREATE DATABASE db_angular;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    age INTEGER,
    username TEXT
);