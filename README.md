# Task Manager Backend

A REST API backend for a task management application built with Node.js, Express, and PostgreSQL.

This project was created to practice backend fundamentals including:

- REST APIs
- CRUD operations
- Express.js
- PostgreSQL integration
- Backend routing
- SQL queries
- Async database operations

---

# Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg
- dotenv
- cors

---

# Features

- Create tasks
- Get all tasks
- Get single task
- Update tasks
- Delete tasks
- PostgreSQL database integration
- RESTful API architecture

---

# Project Structure

```txt
Task_Manager_Backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── db/
│
├── server.js
├── package.json
└── .env
```

---

# API Endpoints

## Create Task

```http
POST /tasks
```

Example body:

```json
{
  "title": "Learn Express"
}
```

---

## Get All Tasks

```http
GET /tasks
```

---

## Get Single Task

```http
GET /tasks
```

Example body:

```json
{
  "id": 1
}
```

---

## Update Task

```http
PUT /tasks
```

Example body:

```json
{
  "id": 1,
  "title": "Learn PostgreSQL",
  "completed": true
}
```

---

## Delete Task

```http
DELETE /tasks
```

Example body:

```json
{
  "id": 1
}
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

```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description text,
  completed BOOLEAN DEFAULT false
);
```

---

# Future Improvements

- Authentication
- Authorization
- Docker deployment
- Logging system
- Rate limiting

---

# Learning Goals

This project was built to strengthen understanding of:

- backend development
- REST APIs
- SQL databases
- async programming
- Express.js architecture

---

# Author

GitHub:
https://github.com/VanteruAbhiramReddy
