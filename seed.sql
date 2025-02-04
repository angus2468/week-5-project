CREATE TABLE IF NOT exists userInfo (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    userName TEXT,
    password TEXT,
    firstName TEXT,
    lastName TEXT
);

CREATE TABLE IF NOT EXISTS checklist(
 id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 task TEXT,
 completed TEXT
);

INSERT INTO checklist (task, completed) VALUES 
('to create a checklist', 'pending')

CREATE TABLE IF NOT EXISTS booksList (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  name VARCHAR(40),
  genre TEXT,
  author TEXT
);

INSERT INTO booksList (name, genre, author) VALUES 
('A Court of Thorns & Roses', 'Fantasy', 'Sarah J Maas'),
('The subtle art of not giving a f*ck', 'Self Help', 'Mark Manson');

CREATE TABLE IF NOT EXISTS booksList (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  name VARCHAR(40),
  genre TEXT
);

INSERT INTO booksList (name, genre) VALUES 
('A Court of Thorns & Roses', 'Fantasy'),
('The subtle art of not giving a f*ck', 'Self Help');