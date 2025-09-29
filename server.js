const express = require("express");
const dotenv = require("dotenv");
const { main } = require("./config/Db.js");
const app = express();

dotenv.config();

main().then(() => {
  console.log("Database connected successfully !");

  app.listen(process.env.PORT, () => {
    console.log("server is listening on", process.env.PORT);
  });
}).catch((err)=>{
    console.log("failed to connect with database ",err)
})
