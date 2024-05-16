specify all routes in one file
// this is like a parent child routing in react js

user.js


const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("user list")
})


router.get("/new",(req,res)=>{
  res.send("new users")

})

module.exports = router;


// In the main file server.js

 const userRouter =  require("./routes/users");
 
 app.use("/users",userRouter)
 
 // FULL CODE OF SERVER.JS
 
 
 const express = require("express");

const app = express();

const path = require("path");
const port = 5000;

app.get("/", (req, res) => {
  //    res.sendStatus(500);
  // res.status(500).send("hi")
//   res.json({ message: "hi" });
//    res.download("Server.js")
res.sendFile(path.join(__dirname,"index.html"),{message:"hi"})
});


 const userRouter =  require("./routes/users");
//  use function is  used to take a paticulat path

app.use("/users",userRouter)


app.listen(port, () => {
  console.log(`The port is running on localhost:${port}`);
});
