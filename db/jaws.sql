use phvm5z06fa77vjlj;

CREATE TABLE burgers (
    id int NOT NULL auto_increment,
    burger_name varchar(200) NOT NULL,
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("Cheese Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Double Bacon Cheeseburger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Avocado Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Triple Stack Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Pepper Jack Mushroom Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Veggie Burger", false);

Select * From burgers;
