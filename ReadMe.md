# ChatApp

ChatApp is a simple real-time chat application featuring a React frontend and a Node.js/Express backend powered by Socket.IO. It allows users to log in with a username and exchange messages instantly with others connected to the server.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Scalability & Limitations](#scalability--limitations)
- [File Overview](#file-overview)
- [Author](#author)

---

## Features

- **User Login:** Simple username-based login using localStorage.
- **Real-Time Messaging:** Instant message delivery via Socket.IO.
- **Sender/Receiver UI:** Clear distinction between your messages and others'.
- **Responsive Design:** Works well on desktop and mobile.
- **In-Memory Storage:** Messages are not persisted; they exist only during the session.

---

## Architecture

- **Frontend:** Built with React (Vite), handles user interface, login, and message display.
- **Backend:** Node.js with Express and Socket.IO, manages real-time communication and message broadcasting.

---

## Project Structure

```
ChatApp/
│
├── frontend/
│   └── src/
│           ├── ChatContainer.jsx   # Main chat logic and state
│           ├── ChatLists.jsx       # Renders chat messages
│           ├── InputText.jsx       # Message input form
│           ├── userLogin.jsx       # User login form
│           └── index.css           # Styles
│
├── server/
│   ├── app.js                      # Main server file (Express + Socket.IO)
│   └── package.json                # Server dependencies
│
└── README.md                       # Project documentation
```

---

## Getting Started

### Backend Setup

1. Navigate to the `server/` directory.
2. Install server dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```
   The server will run at [http://localhost:3001](http://localhost:3001).

### Frontend Setup

1. Navigate to `frontend/`.
2. Install frontend dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
   The frontend will run at [http://localhost:5173](http://localhost:5173) by default.

---

## Usage

1. Open the frontend in your browser.
2. Enter a username to log in.
3. Start chatting with other users connected to the server.

---

## How It Works

- The backend uses Express and Socket.IO to manage real-time communication.
- When a user sends a message, it is broadcast to all connected clients.
- The frontend displays messages, distinguishing between sender and receiver.
- All messages are stored in memory and are lost when the server restarts.

---

## Scalability & Limitations

- **Current Limit:** Suitable for small groups and demos.
- **Not for Production:** No message persistence or authentication.
- **To Scale:** Use a database for message storage, implement authentication, and optimize message delivery.

---

## File Overview

### Frontend

- **ChatContainer.jsx:** Main chat logic, handles user state, message state, and socket connection.
- **ChatLists.jsx:** Renders the list of chat messages, differentiating sender and receiver.
- **InputText.jsx:** Controlled input for sending messages.
- **userLogin.jsx:** Simple login form for username entry.
- **index.css:** Styles for the chat UI.

### Backend

- **app.js:** Sets up Express server and Socket.IO, handles real-time events and message broadcasting.

---


## Author

DevSprings, July 2025

---
