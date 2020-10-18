const express = require("express");
const router = express.Router();

const jobsController = require("../controllers/jobControllers");

router.post("/jobPost", jobsController.jobSubmit);

module.exports = router;
