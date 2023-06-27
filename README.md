# **Inventory-Management-System**
##A full stack java project


## Project Overview

This Java Full Stack project is designed to showcase your skills and understanding of various technologies involved in full-stack development. It incorporates both frontend and backend components to create a complete web application.

This is an inventory management system of a branded company. It has separate portals for **Admin** & **User**.

Admin can add, update, search and delete inventory. Each inventory contains location no, material id, reset quantity, order quantity and available quantity. Admin can also change the status (In Progress/Cancel/Complete) of the order placed by the user.

User can order those inventories. User can search by location number or both location no & material id and place order directly by just mentioning the order quantity.

## Technologies Used

The project utilizes the following technologies:

- **Frontend:**
  - HTML5
  - CSS3
  - TypeScript
  - Angular framework
  
- **Backend:**
  - Java
  - Spring Framework (Spring Boot)
  - Hibernate 
  - RESTful APIs

- **Database:**
  - MySQL
  - MongoDB (optional)
  
- **Development Tools:**
  - IDE (IntelliJ, Eclipse, or any other Java IDE)
  - Git (for version control)
  - Maven (for project management)
  - npm (for frontend dependencies)

## Prerequisites

Before running the project, ensure that you have the following installed:

- Java Development Kit (JDK)
- IDE of your choice
- MySQL or PostgreSQL (depending on your database choice)
- Git
- Node.js and npm (if using React for the frontend)

## Project Setup - Backend

Follow the steps below to set up the project:

1. Clone the project repository from GitHub using the following command:
   ```
   git clone <repository-url>
   ```

2. Open the project in your preferred IDE.

3. Set up the project dependencies by running the following command in the project's root directory:
   ```
   mvn clean install
   ```

4. Configure the database connection settings in the project's configuration file - `application.properties`

5. Run the project using the IDE's build and run functionality or by executing the generated JAR file.

## Project Setup - Frontend

Follow the steps below to set up the project:

1. Clone the project repository from GitHub using the following command:
   ```
   git clone <repository-url>
   ```

2. Open the frontend folder in your preferred IDE.

3. Set up the project dependencies by running the following command in the project's root directory:
   ```
   npm install
   ```

4. Run the project by running the following command in the project's root directory:
   ```
   ng serve 
   ```


## Usage

Once the project is set up and running, you can access the web application by opening a web browser and navigating to the appropriate URL (e.g., `http://localhost:4200/`).

---

Feel free to modify this README file according to your project's specific requirements and needs. Good luck !
