-- Create a docker container with the following command:
-- docker run --name mymysql -e MYSQL_ROOT_PASSWORD=refpxpassword -e MYSQL_DATABASE=tasksdb -p 3306:3306 -d mysql

-- Table tasks
CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR (255) NOT NULL,
  description VARCHAR(255),
  done BOOLEAN NOT NULL DEFAULT FALSE,
  createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
