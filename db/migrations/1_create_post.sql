DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title text,
    author varchar(100) NOT NULL,
    content varchar(1500) NOT NULL
);
