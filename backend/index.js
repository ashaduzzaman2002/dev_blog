const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Routers
const postRouter = require("./routes/post");

// config
dotenv.config();
const port = process.env.PORT;
const URL = process.env.MONGO_URL;

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/post", postRouter);
app.use((err, req, res, next) => {
  res.status(500).json({error: err.message})
})

// Connet to mongodb
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("App is conneted to the database"))
  .then(() => {
    app.listen(port, () =>
      console.log(`Server is running on http://localhost:${port}`)
    );
  })
  .catch((err) => console.log(err));
