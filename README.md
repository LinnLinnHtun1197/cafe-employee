## Project Description
This project aims to create a database and provide endpoints for managing employee and cafe data. The project supports creating, updating, and deleting employees and cafes, as well as retrieving employee and cafe information. The project is implemented using a MySQL database and utilizes RESTful API endpoints to interact with the database.

## Prerequisites
Before running the application, ensure that you have the following software installed:
Node.js
MySQL or MongoDB

# Getting Started
Clone the project repository from GitHub. <br />
git clone <repository_url>

# Install the project dependencies.
cd <project_directory> <br />
npm install <br />

# Configure the database connection.
For MySQL: Open the database/db.js file and provide the necessary connection details (host, port, username, password, and database name).
Create the database. <br />
For MySQL: Run the SQL script database/mysql.sql to create the required tables and schema in your MySQL database.

# Start the application.
npm run start
The application will start running on the specified port (default is 8088). You can access the endpoints using a REST client or a web browser.
