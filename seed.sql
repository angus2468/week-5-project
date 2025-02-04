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

CREATE TABLE IF NOT EXISTS moviewatchlist (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    movieName TEXT,
    movieGenre TEXT,
    movieLanguage TEXT
);

INSERT INTO reminders (reminder, reminderdate) VALUES
('Go buy more eggs', '2025-02-04')

CREATE TABLE IF NOT EXISTS moviewatchlist (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    movieName TEXT,
    movieGenre TEXT,
    movieLanguage TEXT
);

INSERT INTO moviewatchlist (movieName, movieGenre, movieLanguage) VALUES
('Forgotten', 'Thriller/Mystery', 'Korean')

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

CREATE TABLE IF NOT EXISTS moviewatchlist (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    movieName TEXT,
    movieGenre TEXT,
    movieLanguage TEXT
);

INSERT INTO moviewatchlist (movieName, movieGenre, movieLanguage) VALUES
('Forgotten', 'Thriller/Mystery', 'Korean')