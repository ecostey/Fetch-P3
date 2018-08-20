\c fetch_db

DROP TABLE IF EXISTS dogs, gradebook;

CREATE TABLE dogs (
    id SERIAL PRIMARY KEY NOT NULL,
    owner VARCHAR(40) NOT NULL,
    name VARCHAR(40) NOT NULL,
    breed VARCHAR(40) NOT NULL,
    size VARCHAR(40) NOT NULL,
    age INT NOT NULL,
    picture TEXT
);

CREATE TABLE gradebook (
    id SERIAL PRIMARY KEY,
    dogs_id INT REFERENCES dogs(id) ON DELETE CASCADE,
    potty_training BOOLEAN,
    stay BOOLEAN, 
    leash_training BOOLEAN,
    sit BOOLEAN,
    quiet BOOLEAN, 
    leave_it BOOLEAN, 
    comments TEXT
);