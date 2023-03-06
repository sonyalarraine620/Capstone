const express = require("express");
const app = express();
// Request handlers go here
const logging = (request, response, next) => {
    console.log(`${request.method} ${request.url} ${Date.now()}`);
    next();
  };

  
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

app.listen(4040, () => console.log("Listening on port 4040"));