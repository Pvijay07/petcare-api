const { Sequelize } = require("sequelize");

// Create Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,      // database name
  process.env.DB_USER,      // username
  process.env.DB_PASSWORD,  // password
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    logging: false, // disable SQL logs (set true for debugging)
  }
);

// Test connection
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
}

connectDB();

module.exports = sequelize;
