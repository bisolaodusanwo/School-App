const Instructor = require("../models/instructorModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

exports.createInstructor = async (req, res) => {
  try {
    const instructor = new Instructor(req.body);
    await instructor.save();
    res.status(201).send({
      status: "sucess",
      message: "Instructor hired",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.find();
    res.status(201).send({
      status: "success",
      count: instructor.length,
      data: instructor,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getOneInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.instructorId);
    if (!instructor) {
      return res.status(404).send({
        status: "error",
        message: "instructor not found",
      });
    }
    res.status(200).send({
      status: "sucesss",
      data: instructor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateInstructor = async (req, res) => {
  try {
    const instructorId = req.params.id;
    const updateData = req.body;
    const instructor = await Instructor.findByIdAndUpdate(
      instructorId,
      updateData,
      { new: true }
    );

    if (!instructor) {
      return res.status(404).send({
        status: "error",
        message: "not found",
      });
    }

    res.status(200).send({
      status: "success",
      data: instructor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteInstructor = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await Instructor.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "instructor not found" });
    }

    res.status(200).json({ message: "instructor deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
