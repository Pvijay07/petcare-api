const express = require('express');
const app = express();

// middleware to parse JSON
app.use(express.json());

// default route
app.get('/', (req, res) => {
  res.send('🚀 Hello, Express is running!');
});

// server listen
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
