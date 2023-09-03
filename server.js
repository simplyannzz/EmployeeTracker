const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '',
        database: 'courses_db'
    });
db.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database!");
    // start the application
    start();
});


// write files
function start() {
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Add a Manager",
                // "Update an employee role",
                // "View Employees by Manager",
                // "View Employees by Department",
                // "Delete Departments | Roles | Employees",
                // "View the total utilized budget of a department",
                "Exit",
            ],
        })

        .then((answer) => {
            switch (answer.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addADepartment();
                    break;
                case "Add a role":
                    addARole();
                    break;
                case "Add an employee":
                    addAnEmployee();
                    break;
                case "Add a manager":
                    addAManager();
                    break;
                case "Update an employee role":
                    updateAnEmployeeRole();
                    break;
                // case "View Employees by Manager":
                //     viewEmployeesByManager();
                //     break;
                // case "View Employees by Department":
                //     viewEmployeesByDepartment();
                //     break;
                // case "Delete Departments | Roles | Employees":
                //     deleteDepartmentsRolesEmployees();
                //     break;
                // case "View the total utilized budget of a department":
                //     viewTheTotalUtilizedBudgetOfADepartment();
                //     break;
                case "Exit":
                    connection.end();
                    console.log("Come back soon!");
                    break;


            }
        });
}
// function to view all departments
function viewAllDepartments() {
    const query = "SELECT * FROM departments";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        // restart the application
        start();
    });
}
function viewAllRoles() {
    const query = "SELECT roles.roles_id, roles.job_title, roles.salary, departments.departments_name FROM roles join departments on roles.departments_id = departments_id";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        // restart the application
        start();
    });
}
function viewAllEmployees() {
    const query = "SELECT roles.roles_id, roles.job_title, roles.salary, departments.departments_name FROM roles join departments on roles.departments_id = departments_id";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        // restart the application
        start();
    });
}
// e= employee, r = roles, d = departments
function viewAllEmployees() {
    const query = `
    SELECT e.employee_id, e.first_name, e.last_name, r.job_title, d.departments_name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
    FROM employee e
    LEFT JOIN roles r ON e.role_id = r.id
    LEFT JOIN departments d ON r.department_id = d.id
    LEFT JOIN employee m ON e.manager_id = m.id;
    `;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        // restart the application
        start();
    });
}
//add department
function addADepartment() {
    inquirer
        .prompt({
            type: "input",
            name: "name",
            message: "Enter name of department",
        })
        .then((answer) => {
            console.log(answer.name);
            const query = `INSERT INTO departments (department_name) VALUES ("${answer.name}")`;
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.log(`Added department ${answer.name} to the database!`);
                // restart the application
                start();
                console.log(answer.name);
            });
        });
}
const query = "SELECT * FROM departments";
connection.query(query, (err, res) => {
    if (err) throw err;
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "Enter the title of the new role:",
            },
            {
                type: "input",
                name: "salary",
                message: "Enter the salary of the new role:",
            },
            {
                type: "list",
                name: "department",
                message: "Select the department for the new role:",
                choices: res.map(
                    (department) => department.department_name
                ),
            },
        ])
        .then((answers) => {
            const department = res.find(
                (department) => department.name === answers.department
            );
            const query = "INSERT INTO roles SET ?";
            connection.query(
                query,
                {
                    //did i do this right
                    job_title: answers.job_title,
                    salary: answers.salary,
                    department_id: department,
                },
                (err, res) => {
                    if (err) throw err;
                    console.log(
                        `Added role ${answers.job_title} with salary ${answers.salary} to the ${answers.department} department in the database!`
                    );
                    start();
                }
            );
        });
});

