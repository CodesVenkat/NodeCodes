const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

mongoose.connect("mongodb://localhost:27017/user");

const database = mongoose.connection;

database.on("connected",()=>console.log("database connected"))
database.on("error",(err)=>console.log(err));


app.listen(port, () => {
  console.log(`Server is running successfully on port ${port}`);
});
