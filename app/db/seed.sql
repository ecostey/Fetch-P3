\c fetch_db

INSERT INTO dogs (owner, name, breed, size, age)
VALUES
('Liz Costey', 'Rocky', 'Pekingnese Mix', 'small', 8),
('Roland Munich', 'Frank', 'Bulldog', 'medium', 1),
('Carol Wang', 'Link', 'Lab Pitbull Mix', 'large', 3)
;

INSERT INTO gradebook (dogs_id, potty_training, stay, leash_training, sit, quiet, leave_it)
VALUES
    (1, true,false,true,true,false,false),
    (2, true,false,false,true,false,false),
    (3, true,false,true,false,false,true)
;