# Node Authentication API

## Overview
This project is a **Node.js** and **Express.js** based authentication API that uses **MongoDB** for data storage. It provides user registration, login, authentication, and user management endpoints. The API implements **JWT-based authentication** to secure access.

## Prerequisites
Ensure you have the following installed:
- **Node.js** (latest LTS version recommended)
- **MongoDB** (local or cloud instance)
- **Postman** (for testing API endpoints)

---

## Installation & Setup
### Step 1: Clone the Repository
```sh
git clone <repository-url>
cd node-auth-api
```

### Step 2: Install Dependencies
```sh
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root directory and add necessary configurations:
```env
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
```

### Step 4: Run the Project
#### Start the Server
```sh
npm run start
```
This will start the application, and you can test the API using **Postman** or **cURL**.

#### Run in Development Mode
```sh
npm run dev
```
This runs the server using **nodemon**, allowing automatic restarts upon code changes.

---

## Debugging the Project
### Using VS Code Debugger
1. Open **VS Code** and navigate to the **Run and Debug** tab.
2. Select **Node API Debug** from the list of configurations.
3. Start debugging.
4. Place breakpoints in the code, and send requests from Postman to trigger them.

---

## API Endpoints
### 1. User Registration
Registers a new user.
```sh
curl --location 'http://localhost:5000/api/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
  "username": "testuser",
  "email": "srtdk2312@gmail.com",
  "password": "Password1#",
  "role": "admin"
}'
```

### 2. User Login
Authenticates the user and returns a **JWT token**.
```sh
curl --location 'http://localhost:5000/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "srtdk2312@gmail.com",
  "password": "Password1#"
}'
```

### 3. Get User Profile (Authenticated)
Retrieves the user profile. Requires **Authorization Header**.
```sh
curl --location 'http://localhost:5000/api/auth/profile' \
--header 'Authorization: Bearer <your-jwt-token>'
```

### 4. Check if User Exists
Verifies whether a user exists in the database.
```sh
GET http://localhost:5000/api/auth/user-exists?email={email}
```
Example:
```sh
curl --location 'http://localhost:5000/api/auth/user-exists?email=srtdk2312@gmail.com'
```

### 5. Delete User
Deletes a user from the database.
```sh
curl --location 'http://localhost:5000/api/auth/delete-user' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "srtdk2312@gmail.com"
}'
```

---

## Project Structure
```
node-auth-api/
│   ├── .vscode/                # VS Code Debugging Config
│   ├── node_modules/           # Installed Dependencies
│   ├── src/
│   │   ├── controllers/        # API Controllers
│   │   ├── middleware/         # Authentication Middleware
│   │   ├── models/             # Mongoose Models
│   │   ├── routes/             # API Routes
│   │   ├── config/             # Configuration Files
│   │   ├── app.js              # Express App Setup
│   │   ├── server.js           # Server Initialization
│   ├── .env                    # Environment Variables
│   ├── package.json            # Dependencies & Scripts
│   ├── README.md               # Documentation
```

---

## Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - API framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT (JSON Web Token)** - Authentication
- **dotenv** - Environment variable management
- **Nodemon** - Development server auto-restart

---

## Contact
For any queries, reach out at **tidkeshubham10@gmail.com** OR **srtdk2312@gmail.com**.

---

