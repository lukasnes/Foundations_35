-- CREATE TABLE guests (
--     guest_id SERIAL PRIMARY KEY,
--     name VARCHAR(100),
--     primary_phone VARCHAR(20)
-- );

-- CREATE TABLE species (
--     species_id SERIAL PRIMARY KEY,
--     name VARCHAR(100)   
-- );

-- CREATE TABLE pens (
--     pen_id SERIAL PRIMARY KEY,
--     name VARCHAR(30)   
-- );

-- CREATE TABLE animals (
--     animal_id SERIAL PRIMARY KEY,
--     name VARCHAR(20),
--     species_id INTEGER REFERENCES species(species_id),
--     pen_id INTEGER REFERENCES pens(pen_id)
-- );

-- CREATE TABLE feed (
--     feed_id SERIAL PRIMARY KEY,
--     name VARCHAR(30)
-- );

-- CREATE TABLE favorite_animals (
--     favorite_animal_id SERIAL PRIMARY KEY,
--     guest_id INTEGER REFERENCES guests(guest_id),
--     animal_id INTEGER REFERENCES animals(animal_id)
-- );

-- CREATE TABLE animal_feed (
--     animal_feed_id SERIAL PRIMARY KEY,
--     animal_id INTEGER REFERENCES animals(animal_id),
--     feed_id INTEGER REFERENCES feed(feed_id)
-- );

-- INSERT INTO guests (name,primary_phone)
-- VALUES ('John Johnson', '(234) 122-3444'),
--     ('Smith Smith', '(756) 334-3333');

-- INSERT INTO species (name)
-- VALUES ('Turtle'),
--     ('Platipus'),
--     ('Monkey'),
--     ('Cheetah'),
--     ('Cougar'),
--     ('Red Panda'),
--     ('Owl');

-- INSERT INTO pens (name)
-- VALUES ('Bird'),
--     ('Safari'),
--     ('Marsupial'),
--     ('Aquatic'),
--     ('Bamboo');

-- INSERT INTO animals (name, species_id, pen_id)
-- VALUES ('Steve', 3, 2),
--     ('Archimedes', 7, 1),
--     ('Brandon', 5, 2),
--     ('Destroyer', 6, 5),
--     ('Harambei', 2, 3);

-- INSERT INTO feed (name)
-- VALUES ('Banana'),
--     ('Nachos'),
--     ('Bamboo'),
--     ('Pork Rinds'),
--     ('Chicken');

-- INSERT INTO favorite_animals (guest_id,animal_id)
-- VALUES (1, 1),
--     (1, 3),
--     (2, 2),
--     (2, 4),
--     (2, 5);

-- INSERT INTO animal_feed (animal_id,feed_id)
-- VALUES (1, 1),
--     (1, 2),
--     (2, 5),
--     (3, 4),
--     (3, 5),
--     (4, 2),
--     (4, 3),
--     (5, 1),
--     (5, 2);
-- SELECT * FROM animals;
-- SELECT name
-- FROM animals
-- WHERE species_id IN (
--     SELECT species_id
--     FROM species
--     WHERE name = 'Monkey'
-- );

-- SELECT a.name
-- FROM animals AS a
-- JOIN species AS s
-- ON s.species_id = a.species_id
-- WHERE s.name = 'Monkey';