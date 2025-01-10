
# Paytm-Clone Application

This is a **Paytm-clone application** built using modern web development tools and technologies. It features a secure and efficient payment flow with input validation, backend and frontend routing, and optimized state management.

---

## Features

- **Frontend**:
  - Built with **React**.
  - **Client-side routing** with lazy loading for better performance.
  - **State management** using hooks and **Recoil** to reduce unnecessary re-rendering.

- **Backend**:
  - Powered by **Express** with **Express Routes** for clean routing.
  - **JWT** for secure user authentication.
  - **Zod** for input validation to ensure data integrity.
  - Transaction management to ensure error-free payment processing.

- **Database**:
  - **MongoDB** as the database, connected using **Mongoose**.
  - Input data is validated and securely stored.

---

## Prerequisites

1. **Node.js**: Install the latest version of Node.js from [here](https://nodejs.org/).
2. **MongoDB**:
   - Install **MongoDB Compass** from [here](https://www.mongodb.com/products/compass).
   - Create an account and login at [MongoDB Atlas](https://www.mongodb.com/).
   - Create a cluster and obtain your **connection string**.
3. **NPM**: Ensure npm is installed with Node.js.

---

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/hkumar1729/Paytm-clone-App.git
cd Paytm-clone-App
```

---

### 2. Install Dependencies

Install backend and frontend dependencies separately:

**For Backend**:
```bash
cd backend
npm install
```

**For Frontend**:
```bash
cd frontend
npm install
```

---

### 3. Setup MongoDB Connection

- Open the **`db.js`** file located in the `backend` directory.
- Replace the placeholder connection string with your MongoDB connection string from MongoDB Atlas:
  ```javascript
  const mongoose = require('mongoose');
  mongoose.connect('<Your MongoDB Connection String>', { useNewUrlParser: true, useUnifiedTopology: true });
  ```

---

### 4. Start the Project

**Start the Backend**:
```bash
cd backend
node index.js
```

**Start the Frontend**:
```bash
cd frontend
npm run dev
```

---

## Usage

1. Open your browser and go to the frontend URL provided by the development server (usually `http://localhost:5173`) and route to url (`http://localhost:5173/signup`)
2. Explore the app's features:
   - User authentication (JWT).
   - Payment processing with transaction handling.
   - Lazy-loaded routes for optimal performance.

---

## Technologies Used

### **Frontend**
- **React**: UI Library.
- **React Router**: Client-side routing.
- **Hooks**: For state and lifecycle management.
- **Recoil**: State management to avoid unnecessary re-renders.

### **Backend**
- **Express**: Backend framework for building APIs.
- **Mongoose**: MongoDB ORM for data modeling.
- **JWT**: For authentication.
- **Zod**: Input validation.
- **Transaction Management**: To ensure error-free payment flows.

---

## Tips

- **MongoDB Setup**:
  - Use MongoDB Compass to visualize and manage your database.
  - Make sure your cluster allows connections from your IP address.

- **Common Commands**:
  - Install dependencies: `npm install`.
  - Start backend: `node index.js`.
  - Start frontend: `npm run dev`.

---

