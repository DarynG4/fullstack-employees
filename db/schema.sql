
-- In development and testing environments, it is useful to drop and recreate
-- tables to ensure a "fresh" start. This is not something we want to be doing in
-- production!

DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    birthday DATE NOT NULL,
    salary INTEGER NOT NULL
)


