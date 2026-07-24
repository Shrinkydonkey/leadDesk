# 🚀 LeadDesk Mini

LeadDesk Mini is a lightweight CRM (Customer Relationship Management) application built as part of the **Digital Heroes Internship Assessment**. It enables potential clients to submit leads through a landing page while allowing administrators to securely manage those leads through a protected dashboard.

---

## ✨ Features

### Public
- 📝 Submit new leads
- ✅ Client-side and server-side form validation
- 💾 Stores leads in a SQLite database using Prisma ORM

### Admin
- 🔐 Secure admin login using JWT authentication
- 🔒 Password hashing with bcrypt
- 📋 View all submitted leads
- 🔍 Search leads by name or email
- 🔄 Update lead status (New, Contacted, Closed)
- 🚪 Logout functionality
- 🛡️ Protected frontend and backend routes

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Prisma ORM
- SQLite
- JWT (jsonwebtoken)
- bcryptjs

---

## 📂 Project Structure

```
digital/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── prisma/
│   ├── routes/
│   ├── prismaClient.js
│   ├── createAdmin.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Shrinkydonkey/leadDesk.git
cd leadDesk
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET=your_secret_key
```

Run Prisma migration:

```bash
npx prisma migrate dev
```

Create the default admin:

```bash
node createAdmin.js
```

Start the backend:

```bash
npm start
```

The backend runs on:

```
http://localhost:5000
```

---

### 3. Frontend Setup

Open another terminal:

```bash
cd client
npm install
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

---

## 👤 Default Admin Credentials

Email

```
admin@gmail.com
```

Password

```
admin123
```

---

## 📡 API Endpoints

### Public

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/leads` | Submit a new lead |

### Protected

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/login` | Admin Login |
| GET | `/api/leads` | Fetch all leads |
| PUT | `/api/leads/:id` | Update lead status |

---

## 🔐 Authentication

- JWT-based authentication
- Passwords hashed using bcrypt
- Protected backend routes using middleware
- Protected frontend routes using React Router

---

## 📸 Screenshots

<img width="982" height="926" alt="image" src="https://github.com/user-attachments/assets/175a7cbf-b386-4920-90ed-146f7fe925ee" />

<img width="942" height="423" alt="image" src="https://github.com/user-attachments/assets/5670f8d7-5e72-458d-964c-bcc7371e2aea" />

<img width="1691" height="926" alt="image" src="https://github.com/user-attachments/assets/58068a5b-f009-49e9-82ac-13e5d376e73f" />


## 🌐 Live Demo

Frontend

```
https://lead-desk-dusky.vercel.app/
```

Backend

```
https://leaddesk-p9wu.onrender.com/
```

---

## 🤖 AI Usage

AI tools (ChatGPT) were used to assist with understanding concepts such as JWT authentication, Prisma ORM integration, React Router, and debugging during development. All features were implemented, tested, and integrated by the developer.

---

## 👨‍💻 Author

**Piyush Samal**

GitHub:
https://github.com/Shrinkydonkey
