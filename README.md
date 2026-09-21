# Task Tracker

A full-stack task management application built with **React, Node.js, Express, and MongoDB**.

The project demonstrates a complete client-server architecture, including REST API communication, CRUD operations, database persistence, and separate deployment of the frontend and backend.

## 🚀 Live Demo

**[Live Demo](https://task-tracker-xi-dun.vercel.app/)**

## 📂 Repository Structure

This repository is organized as a monorepo containing separate frontend and backend applications:

```text
TaskTracker/
├── TaskTrackerClient/    # React + Vite frontend
├── TaskTrackerServer/    # Node.js + Express backend
└── README.md
```

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS
* REST API integration

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Deployment

* Frontend: Vercel
* Backend: Render

## ✨ Features

* Create tasks
* View tasks
* Update tasks
* Delete tasks
* Persistent task storage using MongoDB
* REST API based client-server communication
* Responsive user interface
* Separate frontend and backend applications

## 🏗️ Architecture

The application follows a simple client-server architecture:

```text
┌─────────────────────┐
│   React + Vite      │
│      Frontend       │
└──────────┬──────────┘
           │
           │ REST API
           ▼
┌─────────────────────┐
│   Express + Node    │
│      Backend        │
└──────────┬──────────┘
           │
           │ Mongoose
           ▼
┌─────────────────────┐
│      MongoDB        │
│      Database       │
└─────────────────────┘
```

## 🧠 What I Practiced

This project helped me work with a complete frontend-to-backend workflow rather than building a frontend-only application.

### Frontend

* Building React components
* Managing application state
* Handling user interactions and forms
* Connecting a React application to REST APIs
* Handling API responses and UI updates
* Structuring a Vite-based React application

### Backend

* Creating an Express server
* Designing REST API endpoints
* Handling CRUD operations
* Connecting Node.js to MongoDB
* Using Mongoose for schema and database operations
* Separating client and server responsibilities

### Full-Stack Integration

* Connecting React to an Express API
* Sending and receiving JSON data
* Persisting application data in MongoDB
* Managing frontend/backend environment configuration
* Deploying frontend and backend independently

## 💡 Challenges & Learnings

One of the main learning points of this project was understanding how the different parts of a full-stack application communicate.

Instead of managing all data locally in the React application, the frontend communicates with an Express API, which is responsible for interacting with MongoDB.

This helped reinforce the flow:

```text
User Interaction
      ↓
React
      ↓
REST API
      ↓
Express / Node.js
      ↓
MongoDB
      ↓
API Response
      ↓
React UI
```

It also provided practical experience with deploying a frontend and backend as separate services and connecting them in a production environment.

## 🔧 Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/Kananpretty/TaskTracker.git
cd TaskTracker
```

### 2. Start the backend

```bash
cd TaskTrackerServer
npm install
npm run dev
```

### 3. Start the frontend

Open another terminal:

```bash
cd TaskTrackerClient
npm install
npm run dev
```

The frontend will be available through the Vite development server.

> The backend requires a MongoDB connection configured through environment variables.

## 📌 Future Improvements

Possible improvements for the project include:

* User authentication and authorization
* User-specific task lists
* Task categories and priorities
* Due dates and reminders
* Task filtering and sorting
* Better error and loading states
* Form validation
* Automated testing
* TypeScript migration
* Improved API error handling

## 📚 Project Status

**Completed — with potential for further enhancements.**

This project was built as a full-stack learning project to practice integrating a React frontend with a Node.js/Express backend and MongoDB database.

---

### Links

* **[Live Demo](https://task-tracker-xi-dun.vercel.app/)**
* **[GitHub Repository](https://github.com/Kananpretty/TaskTracker)**
