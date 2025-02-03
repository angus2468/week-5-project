CREATE TABLE IF NOT exists userInfo (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    userName TEXT,
    password TEXT,
    firstName TEXT,
    lastName TEXT
);