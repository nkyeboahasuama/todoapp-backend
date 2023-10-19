require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRouter = require("./routes/taskRoutes");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/tasks", taskRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
