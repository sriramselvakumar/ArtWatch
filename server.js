const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Registration = require("./Routes/Registration");
const Login = require("./Routes/Login");
const UserInformation = require("./Routes/Users");
const Post = require("./Routes/Posts");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
app.use("/uploads", express.static("uploads"));
app.use("/api/register", Registration);
app.use("/api/login", Login);
app.use("/api/getuser", UserInformation);
app.use("/api/post", Post);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connected to Mongo");
});

const path = require("path");

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server runnin on port ${port} `);
});
