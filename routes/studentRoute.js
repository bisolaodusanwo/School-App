const { Router } = require("express");
const {
  createStudent,
  getStudents,
  getOneStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = Router();

const getOneStudentMiddleware = (req, res, next) => {
  console.log("This is the middleware that gets a single student");
  next();
};

router
  .post("/student", createStudent)
  .get("/student", getStudents)
  .get("/student/:studentId", getOneStudentMiddleware, getOneStudent)
  .patch("/student/:studentId", updateStudent)
  .delete("/student/:studentId", deleteStudent);

module.exports = router;

