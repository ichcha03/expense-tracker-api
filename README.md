# Expense Tracker API

## Description
The Expense Tracker API is a production-grade backend service built with Node.js and MongoDB. It provides a robust foundation for managing and tracking expenses, making it suitable for personal finance applications or enterprise-level expense management systems.

## Features
- **Express.js**: Handles HTTP requests and routing.
- **MongoDB with Mongoose**: Provides a flexible and scalable database solution.
- **Environment Variables**: Securely manage sensitive data like database credentials and server configurations.
- **Test Route**: A basic route to verify server functionality.

## Prerequisites
Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/atlas/database) (Atlas or local instance)

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Expense-Tracker-API
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
1. Create a `.env` file in the root directory.
2. Add the following environment variables:
   ```env
   PORT=5000
   MONGODB_URI=<your-mongodb-connection-string>
   NODE_ENV=development
   ```

## Usage
### Development Server
To start the development server with hot-reloading:
```bash
npm run dev
```

### Production Server
To start the production server:
```bash
npm start
```

## API Endpoints
### Test Route
- **GET /**
  - Response:
    ```json
    {
      "message": "Welcome to Expense Tracker API!",
      "version": "1.0.0",
      "status": "Server is running ✅"
    }
    ```

## Project Structure
```
Expense-Tracker-API/
├── server.js       # Main server file
├── package.json    # Project metadata and dependencies
└── .env.example    # Example environment variables
```

## Dependencies
- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling tool
- **dotenv**: Environment variable management
- **nodemon**: Development utility for auto-restarting the server

## License
This project is licensed under the ISC License.

## Author
Ichcha Mehrishi