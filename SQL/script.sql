CREATE TABLE role (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(50) NOT NULL
);

CREATE TABLE utilisateur (
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(50) NOT NULL,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    role_id INT,
    CONSTRAINT fk_role
        FOREIGN KEY (role_id) 
        REFERENCES role(role_id)
);

CREATE TABLE animal (
    animal_id INT AUTO_INCREMENT PRIMARY KEY,
    prenom VARCHAR(50),
    etat VARCHAR(50)
);

CREATE TABLE race (
    race_id INT AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(50)
);

CREATE TABLE habitat (
    habitat_id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    description VARCHAR(50),
    commentaire_habitat VARCHAR(50)
);

CREATE TABLE image (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    image_data BLOB
);

CREATE TABLE avis (
    avis_id INT AUTO_INCREMENT PRIMARY KEY,
    pseudo VARCHAR(50),
    commentaire VARCHAR(50),
    isVisible BOOL
);

CREATE TABLE service (
    service_id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    description VARCHAR(50)
);

CREATE TABLE rapport_veterinaire (
    rapport_veterinaire_id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE,
    detail VARCHAR(50)
);

-- Jointure entre les différentes tables :
CREATE TABLE dispose (
    animal_id INT,
    race_id INT,
    PRIMARY KEY(animal_id, race_id),
    CONSTRAINT fk_animal_dispose FOREIGN KEY (animal_id) REFERENCES animal(animal_id),
    CONSTRAINT fk_race_dispose FOREIGN KEY (race_id) REFERENCES race(race_id)
);

CREATE TABLE obtient (
    animal_id INT,
    rapport_veterinaire_id INT,
    PRIMARY KEY(animal_id, rapport_veterinaire_id),
    CONSTRAINT fk_animal_obtient FOREIGN KEY (animal_id) REFERENCES animal(animal_id),
    CONSTRAINT fk_rapport_obtient FOREIGN KEY (rapport_veterinaire_id) REFERENCES rapport_veterinaire(rapport_veterinaire_id)
);

CREATE TABLE detient (
    animal_id INT,
    habitat_id INT,
    PRIMARY KEY(animal_id, habitat_id),
    CONSTRAINT fk_animal_detient FOREIGN KEY (animal_id) REFERENCES animal(animal_id),
    CONSTRAINT fk_habitat_detient FOREIGN KEY (habitat_id) REFERENCES habitat(habitat_id)
);

CREATE TABLE comporte (
    habitat_id INT,
    image_id INT,
    PRIMARY KEY(habitat_id, image_id),
    CONSTRAINT fk_habitat_comporte FOREIGN KEY (habitat_id) REFERENCES habitat(habitat_id),
    CONSTRAINT fk_image_comporte FOREIGN KEY (image_id) REFERENCES image(image_id)
);

