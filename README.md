# Library Management Project

## Frontend
The frontend of this project is built using React.js and Material-UI. It is fully responsive and provides a user-friendly interface for managing library resources.

### Features
- **Add Book**: Adds a new book to the library.
- **Show Books**: Lists all books in the library.
- **Search**: Searches for books based on different criteria.
- **Filter**: Applies filters to the book list.
- **Update Books**: Update the existing books
- **Add User**: Adds a new user to the library
- **Login**: Login/register Users
- **Proper User Authentication**: Provides Proper User Authentication using JWT Tokens and renders error with proper status code through toast (react library) as it gives accurate           notifications based upon the encountered error or if user already exists or if user has logged in successfully.


### Steps to Run the Frontend
1. Navigate to the frontend directory:
    ```bash
    cd client
    ```
2. Install the required dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
    
### Features

## Backend
The backend of this project is built using Node.js, Express.js, and MongoDB with Mongoose for database management. It includes features for user authentication and data handling.

### Endpoints
- **POST /api/ ** : A common route
- **POST /register**: To Register User by Admin.
- **POST /login**: Authenticate a user and generate a JWT token.
- **POST /search**: Search for books based on query parameters.
- **POST /borrow**: For User to Borrow Specified Books.
- **POST /return**: For User to Return Specified Books.

### Steps to Run the Backend
1. Navigate to the backend directory:
    ```bash
    cd server
    ```
2. Install the required dependencies:
    ```bash
    npm install
    ```
3. Start the backend server:
    ```bash
    npm start
    ```

## Project Structure
The project follows a typical Node.js and Express.js structure:

- frontend: Contains the React application and Tailwind CSS for the UI.
- frontend/src: Contains all the components, pages.. etc.
- backend: Contains backend part of the application in which various subfolders are there and files.
- backend/index.js: Contains connection with database and request divert to routes.
- backend/controller: Contains the main logic for posting and getting data from the database.
- backend/model: Contains the schema for filtering , fetching books from the database.
- backend/routes: Contains the route definitions for the API.


## Running the Application
#### 1. Frontend:<br>
- Navigate to the frontend directory and start the development server.
```bash
cd frontend
npm run dev
```
#### 2. Backend:<br>
- Navigate to backend folder. Start the backend server.
```bash
npm start
```
