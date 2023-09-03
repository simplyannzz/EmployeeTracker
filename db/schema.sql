DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;
USE employeetracker_db;

CREATE TABLE departments (
    departments_name VARCHAR(50) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);
CREATE TABLE roles (
    roles_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(50) NOT NULL,
    salary BIGINT NOT NULL,
    departments_id INT,
    FOREIGN KEY(departments_id)
    REFERENCES(departments(id))
    ON DELETE SET NULL    
);
CREATE TABLE employees (
employee_id INT NOT NULL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
job_title VARCHAR(50),
department_id INT,
managers_id VARCHAR(50) NOT NULL
);