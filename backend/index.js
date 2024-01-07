const express = require('express');
const app = express();
const userRouter = require("./routes/user.js");
const cors = require('cors');

app.use(cors());

// Middleware for parsing request bodies
app.use(express.json());
// app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});