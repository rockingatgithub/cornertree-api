const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    company: {},
    coreSkills: {
      type: Array,
      required: true,
    },
    softSkills: {
      type: Array,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    locationZip: {
      type: Number,
      required: true,
    },
    compensation: {
      type: Number,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
