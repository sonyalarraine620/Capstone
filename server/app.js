const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const toDo = require("./routers/toDo");
const appointments = require("./routers/appointments");

dotenv.config();

const PORT = process.env.PORT || 4040;

 //does this need to be moved?
mongoose.connect(process.env.MONGODB);
// mongoose.connect(process.env.MONGODB2);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const app = express();
// Request handlers go here
const logging = (request, response, next) => {
    console.log(`${request.method} ${request.url} ${Date.now()}`);
    next();
  };

  const cors = (req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type, Accept,Authorization,Origin"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  };
  
  app.use(cors);
  app.use(express.json());
  app.use(logging);
  
  /*
    express supports chaining `use()` statements,
    so the above 2 statements could look like this as well
    app.use(express.json()).use(logging)
  */

app.get("/status", (request, response) => {
    response.status(200).json({ message: "Service healthy" });
 });

 app.post("/add", (request, response) => {
    const num1 = request.body.numberOne;
    const num2 = request.body.numberTwo;
    const responseBody = {
       sum: num1 + num2
    };
    response.json(responseBody);
 });

 app.use("/toDo", toDo);
 app.use("/appointments", appointments);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));