const { Router } = require("express");
const { createCourse } = require("../controllers/courseController");

const router = Router();

router.get("/course", createCourse);

module.exports = router;
