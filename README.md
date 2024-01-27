# Universitu-PG

Universitu-PG is a web application for managing university courses, professors, and students. It provides a user-friendly interface for administrators, professors, and students to perform various tasks related to course management.

## Features

- **Course Management:** Administrators can add, edit, and delete courses. They can assign professors to courses and manage the course schedule.
- **Professor Management:** Administrators can add, edit, and delete professor profiles. They can assign professors to courses and manage their availability.
- **Student Management:** Administrators can add, edit, and delete student profiles. They can enroll students in courses and manage their grades.
- **Course Enrollment:** Students can view available courses, enroll in courses, and drop courses if needed.
- **Grade Management:** Professors can enter and update students' grades for the courses they teach.
- **User Authentication:** The application provides user authentication and authorization to ensure secure access to different functionalities based on user roles.

## Technology Stack

The application is built using the following technologies:

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Version Control:** Git

## Getting Started

To get started with Universitu-PG, please follow these steps:

1. Clone the repository: `git clone https://github.com/t1nkov/universitu-pg.git`
2. Navigate to the project directory: `cd universitu-pg`
3. Install the dependencies: `npm install`
4. Set up the database connection by providing your MongoDB connection string in the `.env` file.
5. Start the development server: `nodemon index`

## License

Universitu-PG is released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute this project.
