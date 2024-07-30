const { Router } = require("express");
const {
  createInstructor,
  getInstructor,
  getOneInstructor,
  updateInstructor,
  deleteInstructor,
} = require("../controllers/instructorController");
const { createAccount } = require("../controllers/authController");

const router = Router();

const getOneInstructorMiddleware = (req, res, next) => {
  console.log("this is a middleware that gets a single student");
  next();
};

const createInstructorMiddleware = (req, res, next) => {
  console.log("this is a middleware that post a student");
  next();
};

router.post("/instructor", createInstructorMiddleware, createAccount);
// router.get("/instructor", getInstructor);
// router.get(
//   "/instructor/:instructorId",
//   getOneInstructorMiddleware,
//   getOneInstructor
// );
// router.put("/instructor/:id", updateInstructor);
// router.delete("/instructor/:id", deleteInstructor);

module.exports = router;
