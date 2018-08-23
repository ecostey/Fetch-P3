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
    potty_training BOOLEAN DEFAULT false,
    stay BOOLEAN DEFAULT false, 
    leash_training BOOLEAN DEFAULT false,
    sit BOOLEAN DEFAULT false,
    quiet BOOLEAN DEFAULT false, 
    leave_it BOOLEAN DEFAULT false, 
    comments TEXT
);