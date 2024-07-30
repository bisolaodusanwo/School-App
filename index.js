const express = require("express");
const db = require("./dbConn/conn");
const courseRoute = require("./routes/courseRoute");
const authRoute = require("./routes/authRoute");
const studentRoute = require("./routes/studentRoute");
const instructorRoute = require("./routes/instructorRoute");
const {
  verifyToken,
  isStudent,
  isInstructor,
} = require("./middleware/authMiddleware");

const app = express();
const port = 3003;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

//using this middleware to process request from consumers, it works for post, patch, put requests
app.use(express.json());

const welcomeMessage = (req, res, next) => {
  console.log("Welcome to our school app");
  next();
};

const thankYou = (req, res, next) => {
  console.log("Thank you for using our school app");
  //this is to move to the next middleware
  next();
};

//this execute for every route on this server
app.use(welcomeMessage);

app.use(thankYou);

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});

//improting the student route
app.use("/api/v1", authRoute);
app.use("/api/v1", courseRoute);
app.use("api/v1", verifyToken, isStudent, studentRoute);
app.use("/api/v1", verifyToken, isInstructor, instructorRoute);
app.use("/api/v1", studentRoute);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.post("/about", (req, res) => {
//   console.log(req.body);
//   res.send("Thank you");
// });
