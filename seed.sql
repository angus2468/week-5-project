CREATE TABLE IF NOT exists userInfo (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    userName TEXT,
    password TEXT,
    firstName TEXT,
    lastName TEXT
);

INSERT INTO userInfo (userName, password, firstName, lastName) VALUES
('Testing123',
'Password123',
'John',
'Doe');

CREATE TABLE IF NOT EXISTS reminders (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    reminder TEXT,
    reminderdate DATE,
    userName TEXT
);

INSERT INTO reminders (reminder, reminderdate, userName) VALUES
('Go buy more eggs', '2025-02-04', 'Testing123')


CREATE TABLE IF NOT EXISTS moviewatchlist (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    movieName TEXT,
    movieGenre TEXT,
    movieLanguage TEXT,
    userName TEXT
);

INSERT INTO moviewatchlist (movieName, movieGenre, movieLanguage, userName) VALUES
('Forgotten', 'Thriller/Mystery', 'Korean', 'Testing123')



CREATE TABLE IF NOT EXISTS checklist(
 id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 task TEXT,
 completed TEXT,
 userName TEXT
);

INSERT INTO checklist (task, completed, userName) VALUES 
('to create a checklist', 'pending', 'Testing123')



CREATE TABLE IF NOT EXISTS booksList (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  name VARCHAR(40),
  genre TEXT,
  author TEXT,
  userName TEXT
);

INSERT INTO booksList (name, genre, author) VALUES 
('A Court of Thorns & Roses', 'Fantasy', 'Sarah J Maas', 'Testing123'),
('The subtle art of not giving a f*ck', 'Self Help', 'Mark Manson', 'Testing123');


CREATE TABLE IF NOT EXISTS moviewatchlist (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    movieName TEXT,
    movieGenre TEXT,
    movieLanguage TEXT,
    userName TEXT
);

INSERT INTO moviewatchlist (movieName, movieGenre, movieLanguage, userName) VALUES
('Forgotten', 'Thriller/Mystery', 'Korean', 'Testing123')


CREATE TABLE IF NOT EXISTS weather(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 location TEXT,
 country TEXT,
  userName TEXT
);

INSERT INTO weather (location, country. userName) VALUES
('Kingston Upon Hull', 'United Kingdom', 'Testing123')
