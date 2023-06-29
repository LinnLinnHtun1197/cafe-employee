## Project Description
This project aims to create a database and provide endpoints for managing employee and cafe data. The project supports creating, updating, and deleting employees and cafes, as well as retrieving employee and cafe information. The project is implemented using a MySQL database and utilizes RESTful API endpoints to interact with the database.

## Prerequisites
Before running the application, ensure that you have the following software installed:
Node.js
MySQL or MongoDB

# Getting Started
Clone the project repository from GitHub.
git clone <repository_url>

Install the project dependencies.
cd <project_directory>
npm install
Configure the database connection.
For MySQL: Open the database/db.js file and provide the necessary connection details (host, port, username, password, and database name).
Create the database.
For MySQL: Run the SQL script database/mysql.sql to create the required tables and schema in your MySQL database.

Start the application.

npm run start
The application will start running on the specified port (default is 3000). You can access the endpoints using a REST client or a web browser.

##Database Design
The database design consists of the following tables:

employees
id: Unique employee identifier in the format 'UIXXXXXXX' (alphanumeric)
name: Name of the employee
email_address: Email address of the employee
phone_number: Phone number of the employee (starts with 9 or 8 and has 8 digits)
gender: Gender of the employee (Male/Female)

cafes
id: UUID (Universally Unique Identifier) of the cafe
name: Name of the cafe
description: A short description of the cafe
logo: Optional field for the logo of the cafe (used for displaying a logo image on the front-end)
location: Location of the cafe

employee_cafe
employee_id: Unique employee identifier (foreign key referencing employees table)
cafe_id: UUID of the cafe (foreign key referencing cafes table)
start_date: Start date of the employee at the cafe

#API Endpoints
The project provides the following API endpoints:

GET /cafes?location=<location>
Description: Retrieves a list of cafes, sorted by the highest number of employees first
Request Parameters:
location (optional): Filters the list to return only cafes within the specified location
Response:
name: Name of the cafe
description: A short description of the cafe
employees: Number of employees in the cafe (integer)
logo (optional): Logo of the cafe (used for displaying a logo image on the front-end)
location: Location of the cafe
id: UUID of the cafe

GET /employees?cafe=<cafe>
Description: Retrieves a list of employees, sorted by the highest number of days worked
Request Parameters:
cafe (optional): Filters the list to return only employees belonging to the specified cafe
Response:
id: Unique employee identifier in the format 'UIXXXXXXX'
name: Name of the employee
email_address: Email address of the employee
phone_number: Phone number of the employee
days_worked: Number of days the employee has worked (derived from the current date minus the start date)
cafe: cafe's name that the employee is under (leave blank if not assigned yet)

POST /cafe
Description: Creates a new cafe in the database
Request Body:
name: Name of the cafe
description: A short description of the cafe
logo (optional): Logo of the cafe (used for displaying a logo image on the front-end)
location: Location of the cafe

POST /employee
Description: Creates a new employee in the database
Request Body:
id: Unique employee identifier in the format 'UIXXXXXXX'
name: Name of the employee
email_address: Email address of the employee
phone_number: Phone number of the employee
gender: Gender of the employee (Male/Female)
cafe_id: UUID of the cafe the employee belongs to

PUT /cafe
Description: Updates the details of an existing cafe in the database
Request Body:
id: UUID of the cafe to update
name: Updated name of the cafe
description: Updated description of the cafe
logo (optional): Updated logo of the cafe (used for displaying a logo image on the front-end)
location: Updated location of the cafe

PUT /employee
Description: Updates the details of an existing employee in the database
Request Body:
id: Unique employee identifier in the format 'UIXXXXXXX' to update
name: Updated name of the employee
email_address: Updated email address of the employee
phone_number: Updated phone number of the employee
gender: Updated gender of the employee (Male/Female)
cafe_id: UUID of the cafe the employee belongs to (update the relationship)

DELETE /cafe
Description: Deletes an existing cafe from the database. Also deletes all employees under the deleted cafe.
Request Body:
id: UUID of the cafe to delete

DELETE /employee
Description: Deletes an existing employee from the database
Request Body:
id: Unique employee identifier in the format 'UIXXXXXXX' to delete

Conclusion
This README provides an overview of the project, including the database design, API endpoints, and installation instructions. You can follow these instructions to set up the project and start using the provided endpoints to manage employee and cafe data in the database. Feel free to customize and extend the project based on your specific requirements. If you encounter any issues or have further questions, please refer to the project documentation or reach out for support.
