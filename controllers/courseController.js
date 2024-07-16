const Course = require("../models/courseModel");

exports.createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send({
      status: "success",
      message: "Successfully Registered",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
