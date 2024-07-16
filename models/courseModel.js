const mongoose = require("mongoose");

const { Schema } = mongoose;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirment: {
    type: String,
    required: false,
  },
  instructor: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  duration: {
    type: String,
    required: true,
  },
  students: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  price: {
    type: Number,
    required: true,
  },
  requirment: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
