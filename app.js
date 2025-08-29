require("dotenv").config();
const express = require("express");
const db = require("./models"); // loads all models
const { User, Post } = db;

const app = express();
app.use(express.json());

// Sync models
db.sequelize.sync({ alter: true }).then(() => {
  console.log("✅ Database synced");
});

// Routes
app.get("/", async (req, res) => {
  res.send("Sequelize with Postgres is working 🚀");
});

// Create user
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Fetch users
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
