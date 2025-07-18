# INVENTORY MANAGEMENT SYSTEM

A professional full-stack **MERN (MongoDB, Express, React, Node.js)** inventory management dashboard to manage products, track inventory value, and visualize data using charts.

---

## 🔥 Features

### ✅ Core Functionalities
- Add, Edit, Delete products
- Search & filter products
- Sort by name or price
- Inventory stats & value calculation
- Responsive dashboard layout

### 📊 Dashboard Analytics
- Total products
- Inventory value
- Products per category
- Inventory trends chart (Bar/Line)

### 💡 UI/UX Enhancements
- Clean, responsive layout (Tailwind CSS or plain CSS)
- Sidebar navigation
- Navbar with dark mode toggle & username
- Realtime form validation
- Toast notifications for actions

---

## 🧱 Tech Stack

**Frontend**
- React (Vite)
- Axios
- React Router DOM
- Chart.js
- CSS / TailwindCSS (optional)

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- dotenv

---

## 📁 Folder Structure

```
myInventoryApp/
├── backend/
│   ├── index.js               # Server entry + DB connect
│   ├── models/Product.js      # Mongoose product schema
│   ├── routes/productRoutes.js# Express routes
│   ├── controllers/           # Logic for CRUD
│   └── .env                   # Environment vars
│
├── frontend/
│   ├── App.jsx                # Main component
│   ├── components/            # UI Components
│   ├── services/              # API services
│   ├── App.css                # Styling
│   └── main.jsx               # React root
```

---

## ⚙️ Getting Started

### 🔽 Clone the Repo

```bash
git clone https://github.com/yourusername/myInventoryApp.git
cd myInventoryApp
```

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/myInventoryDB
```

Start MongoDB if not running:

```bash
mongod --dbpath ~/data/db
```

Run backend:

```bash
node index.js
```

---

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit: `http://localhost:5173`

---

## 🧪 Sample Data

Here’s an example of the product structure:

```json
{
  "_id": "auto-generated",
  "name": "Laptop",
  "price": 1200
}
```

You can insert sample products using MongoDB Compass.

---

## ✨ Future Improvements

- User Authentication (JWT)
- Role-based access (Admin/User)
- Export reports (CSV/PDF)
- Mobile-first design
- Unit + E2E testing

---

## 🤝 Contributing

PRs are welcome. For major changes, open an issue first.

---

## 📄 License

MIT License

---

## 🌐 Live Demo (optional)

Coming soon...
