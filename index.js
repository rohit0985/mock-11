const express = require("express");
const app = express();
require("dotenv").config();
const {UserRouter} = require("./Routers/user.router")
const {BugRouter} = require("./Routers/bugs.router")
const cors = require("cors")
const {connection} = require("./Config/db")

app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
  res.send({ msg: "Welcome to BugTracker" });
});

app.use("/bugs", BugRouter)
app.use("/users", UserRouter)

app.listen(7500, async() => {
  try {
    await connection;
    console.log(`Listening at PORT ${process.env.PORT}`);
  } catch (err) {
    console.log("Error while connecting to the server");
    console.log("Error", err);
  }
});
