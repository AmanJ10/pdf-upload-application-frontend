# Frontend Setup – Hospital PDF Application

This document explains how to set up and run the **frontend** of the Hospital PDF Application.

---

## 🚀 Tech Stack
- **React + Vite**
- **Tailwind CSS**
- **Axios** for API calls
- **Vite Environment Variables**
---

## 📁 Project Structure (Example)

```
frontend/
 ├── src/
 │   ├── components/
 │   ├── pages/
 │   ├── services/
 │   └── App.jsx
 ├── public/
 ├── package.json
 ├── vite.config.js
 └── index.html
```

---

## 🔧 1. Prerequisites

Make sure the following are installed:

- **Node.js** (>= 16.x)
- **npm** or **yarn**
- Access to your **backend API** running on:  
  `http://localhost:5001/api`

---

## ⚙️ 2. Installation

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

---

## 🌍 3. Environment Variables

Create a `.env` file in the frontend root:

```
VITE_BACKEND_API_URL=http://localhost:5001/api
```

You can verify the value inside your code:

```javascript
console.log(import.meta.env.VITE_BACKEND_API_URL);
```

---

## ▶️ 4. Running the Frontend

Start the development server:

```bash
npm run dev
```

You should see something like:

```
VITE v5 running at:
> Local:    http://localhost:5173/
> Network:  http://192.168.x.x:5173/
```

Open your browser and visit:  
👉 **http://localhost:5173**

---

## 🧪 5. Testing API Connectivity

Make sure your backend is running.

Test API calls inside the app or directly using curl:

```bash
curl http://localhost:5001/api
```

---


## 📦 7. Build for Production

```bash
npm run build
```

Production files will be in the `dist/` folder.

---

## 📄 License
MIT License

---
