
DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  description VARCHAR (255) NOT NULL,
  product_amount INTEGER  NOT NULL,
  image VARCHAR(255) NOT NULL

);
