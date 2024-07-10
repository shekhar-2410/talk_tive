const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to the database
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
