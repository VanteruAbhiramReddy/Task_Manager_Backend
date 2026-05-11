# Task Manager Backend

A RESTful backend API for a multi-user task management application built with Node.js, Express, and PostgreSQL.

This project was built to strengthen backend engineering fundamentals by implementing authentication, session management, authorization, PostgreSQL relationships, and modular Express architecture manually without relying on authentication frameworks.

---

# Features

## Authentication & Sessions

- User signup and login
- Password hashing with bcrypt
- Session-based authentication
- HTTP-only cookie authentication
- Logout with session invalidation
- Protected routes using custom auth middleware

## Task Management

- Create tasks
- Fetch authenticated user's tasks
- Update owned tasks
- Delete owned tasks
- Ownership-based authorization

## Backend Architecture

- Modular Express architecture
- Controllers / Services separation
- Reusable validation middleware
- Centralized async error handling
- PostgreSQL relational database design
- RESTful API structure

---

# Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg
- bcrypt
- cookie-parser
- zod
- dotenv
- cors

---

# Project Structure

```txt
src/
├── controllers/
├── middlewares/
├── routes/
├── schemas/
├── services/
├── validators/
├── utilities/
├── db/
└── server.js
```

---

# API Endpoints

## Authentication

### Signup

```http
POST /auth/signup
```

Example body:

```json
{
  "name": "Abhiram",
  "email": "abhiram@example.com",
  "password": "strongpassword"
}
```

---

### Login

```http
POST /auth/login
```

---

### Logout

```http
POST /auth/logout
```

---

# Tasks

All task routes require authentication.

### Create Task

```http
POST /tasks
```

---

### Get User Tasks

```http
GET /tasks
```

---

### Update Task

```http
PUT /tasks/:id
```

---

### Delete Task

```http
DELETE /tasks/:id
```

---

# Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
DATABASE_URL=your_postgresql_connection_url
```

---

# Installation

Clone repository:

```bash
git clone https://github.com/VanteruAbhiramReddy/Task_Manager_Backend.git
```

Move into project directory:

```bash
cd Task_Manager_Backend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# Database Schema

## Users

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);
```

## Sessions

```sql
CREATE TABLE sessions (
    id UUID PRIMARY KEY,
    user_id INTEGER REFERENCES users(id)
        ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()
);
```

## Tasks

```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT false,
    user_id INTEGER REFERENCES users(id)
        ON DELETE CASCADE,
    UNIQUE(title, user_id)
);
```

---

# Concepts Practiced

- REST API design
- Session-based authentication
- Cookie handling
- Authorization & ownership validation
- Express middleware architecture
- PostgreSQL relationships & constraints
- Async error handling
- Request lifecycle management

---

# Future Improvements

- Authentication
- Authorization
- Docker deployment
- Logging system
- Rate limiting
- Dockerization
- API documentation
- Automated testing
- Redis-based session storage

---

# Author

GitHub:
https://github.com/VanteruAbhiramReddy