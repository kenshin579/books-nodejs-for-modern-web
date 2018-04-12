CREATE DATABASE Location;
use Location;

CREATE TABLE locations (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  name      VARCHAR(50) NOT NULL,
  latitude  DOUBLE      NOT NULL,
  longitude DOUBLE      NOT NULL,
  date      DATETIME    NOT NULL
);