INSERT INTO dogs (owner, name, breed, size, age, picture)
VALUES
('Liz Costey', 'Rocky', 'Pekingnese Mix', 'small', 8, 'https://i.imgur.com/lVrddVK.jpg'),
('Roland Munich', 'Frank', 'Bulldog', 'medium', 2, 'https://i.imgur.com/1KqLMM0.jpg'),
('Carol Wang', 'Link', 'Lab Pitbull Mix', 'large', 3, 'https://i.imgur.com/45jd3Eu.jpg'),
('Dorothy Gail', 'Toto', 'Cairn Terrier', 'small', 4, 'https://i.imgur.com/LmOmUWw.png'),
('Al Salazar', 'Norbert', 'French Bulldog', 'small', 1, 'https://i.imgur.com/vz5S371.png'),
('Bo Lee', 'Milo', 'Golden Retriever', 'large', 1, 'https://i.imgur.com/TzVfo1G.png')
;

INSERT INTO gradebook (dogs_id, potty_training, stay, leash_training, sit, quiet, leave_it)
VALUES
    (1, true,false,true,true,false,false),
    (2, true,true,false,true,false,false),
    (3, true,false,true,false,false,true),
    (4, false,false,true,false,false,false),
    (5, false,true,true,true,false,false),
    (6, true,false,false,true,true,true)
;