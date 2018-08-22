\c fetch_db

INSERT INTO dogs (owner, name, breed, size, age, picture)
VALUES
('Liz Costey', 'Rocky', 'Pekingnese Mix', 'small', 8, 'https://i.imgur.com/lVrddVK.jpg'),
('Roland Munich', 'Frank', 'Bulldog', 'medium', 1, 'https://i.imgur.com/1KqLMM0.jpg'),
('Carol Wang', 'Link', 'Lab Pitbull Mix', 'large', 3, 'https://i.imgur.com/45jd3Eu.jpg')
;

INSERT INTO gradebook (dogs_id, potty_training, stay, leash_training, sit, quiet, leave_it)
VALUES
    (1, true,false,true,true,false,false),
    (2, true,false,false,true,false,false),
    (3, true,false,true,false,false,true)
;