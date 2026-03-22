# Premium Full-Stack Portfolio

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)

A state-of-the-art, visually stunning, and ultra-responsive full-stack portfolio application. Built with a focus on high-end aesthetics, smooth performance, and modern web technologies.

---

## 📽️ Project Showcase

> [!IMPORTANT]
> A high-quality demo GIF of this project is available in the root directory.

![Project Demo Placeholder](demo.gif)

---

## ✨ Key Features

### 🎨 Visual Excellence
- **3D Interactive Background**: Immersive star field built with **Three.js** and **React Three Fiber**.
- **Glassmorphic Design**: Modern UI components with frosted glass effects and sleek borders.
- **Micro-animations**: Smooth transitions and hover effects powered by **Framer Motion**.
- **Custom Cursor**: Interactive ring-following cursor for enhanced user engagement.
- **Scroll Progress**: Visual feedback for page scroll depth.
- **Dark/Light Mode Ready**: Optimized color palette for premium dark mode aesthetics.

### 🛠️ Core Functionality
- **Dynamic Portfolio**: Showcase projects with interactive cards and detailed modal views.
- **Integrated Blog**: Full blog system with real-time data fetching from MongoDB.
- **Functional Contact Form**: Direct communication channel saved to a database and can be extended with email notifications.
- **Advanced SEO**: Dynamic meta tags and SEO optimization using `react-helmet-async`.
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop experiences.

---

## 🏗️ Technical Stack

### **Frontend**
- **Framework**: React 18 (Vite)
- **Styling**: Vanilla CSS with modern CSS Variables (Tailwind-compatible structure)
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM (v6)
- **State/Data**: Axios, React Helmet Async
- **Analytics**: Vercel Analytics

### **Backend**
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose ODM)
- **Mailing**: Nodemailer (Configuration ready)
- **Utilities**: CORS, Dotenv, Nodemon

---

## 📂 Project Structure

```bash
FUTURE_FS_01/
├── frontend/               # React client application
│   ├── src/
│   │   ├── components/     # UI Components (Hero, About, Projects, etc.)
│   │   ├── App.jsx         # Main application logic
│   │   ├── index.css       # Global design system & styling
│   │   └── main.jsx        # Entry point
│   └── package.json
├── backend/                # Node.js API server
│   ├── models/             # Database Schemas (Blog, Message)
│   ├── routes/             # API Endpoints (Blogs, Contact)
│   ├── server.js           # Server entry point
│   └── package.json        
├── demo.gif                # Project demo GIF
└── README.md               # You are here!
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- MongoDB Atlas or local MongoDB instance

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```
Run the server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```
Run the development server:
```bash
npm run dev
```

---

## 📈 SEO & Optimization
The project includes a robust SEO component that handles:
- **Meta Title & Description**: Optimized for search engine visibility.
- **Canonical URLs**: Built-in support for multiple environments.
- **Vercel Analytics**: Ready to track visitor engagement.

---

## 👨‍💻 Author
**Antony Abishek A**
- Portfolio: [antonyabishek.vercel.app](https://antonyabishek.vercel.app/)
- Role: Full-Stack Developer

---

> [!TIP]
> This project is designed to be highly modular. You can easily add new sections by creating a new component in `frontend/src/components` and adding a corresponding route or section in `App.jsx`.

---
