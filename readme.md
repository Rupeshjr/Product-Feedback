# 📦 Full-Stack Feedback App

This is a full-stack web application built with a **React** frontend and a **Node.js + Express** backend using **MongoDB** as the database. It allows users to create and view feedback items.

---

### Demo URL

- Frontend URL - https://product-feedback-frontend-ylh8.onrender.com
- API Docs URL - https://product-feedback-i1eg.onrender.com/api/docs
- Backend URL - https://product-feedback-i1eg.onrender.com

Note:

## 🚀 Deployment Notes (Render)

This project is deployed using **Render** for both the frontend and backend.

- **Backend:** Deployed on Render as a free web service.
- **Frontend:** Also deployed on Render as a static site _(or web service, depending on setup)_.

> ⚠️ **Important Note (Free Tier Limitation):**  
> Render’s free instances will **spin down** after a period of inactivity.
>
> This means:
>
> - The **first request** after some idle time can take **up to 50 seconds or more** to respond.
> - Subsequent requests will be fast once the service is "warmed up".

If you notice a delay when first accessing the app or API, it's due to this startup time on the free tier.

## 🛠️ Tech Stack

### 🔹 Frontend

- React
- JavaScript
- Material UI (or your preferred UI library)

### 🔹 Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Rupeshjr/Product-Feedback.git
cd Product-Feedback
```

### 2. Setup Backend

- create .env file and add the following environmental variables
- MONGO_URI

```bash
cd .\backend\
npm install
npm run dev
```

### 3. Setup Frontend

- Add the following environmental variables in .env file
- VITE_BACKEND_BASE_URL

```bash
cd .\frontend\
npm install
npm run dev
```
