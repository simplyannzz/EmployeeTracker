INSERT INTO departments (departments_name)
VALUES
('Executive Board'),
('Marketing'),
('Human Resources'),
('Finance'),
('Engineering'),
('Information Technology'),
('Customer Relations'),
('Research and Development'),
('Legal'),
('Maintenance');




INSERT INTO roles (job_title, salary, department_id)
VALUES
('Chief Executive Officer', 820000, 1),
('Marketing Manager', 116000, 2),
('HR Director', 178000, 3),
('Finance Head', 145000, 4),
('Senior Engineer', 108000, 5),
('IT Manager', 176000, 6),
('Customer Relations Manager', 52000, 7),
('Research and Development Manager ', 150000, 8),
('Legal Manager', 91000, 9),
('Maintenance Manager', 86000, 10);



INSERT INTO employees (first_name, last_name, roles_id, mangagers_id)
VALUES
('Annie', 'Bui', 1, 1),
('Kim', 'Nguyen', 2, 2),
('Gogo', 'Holland', 3, 3),
('Naro', 'Asano', 4, 4),
('Saliena', 'Asano', 5, 5),
('Edric', 'Mocha', 6, 6),
('Aveline', 'Gonzalas', 7, 7),
('Kat', 'Diaz', 8, 8),
('Chicka', 'Vo', 9, 9),
('Joanell', 'Leggett', 10, 10);