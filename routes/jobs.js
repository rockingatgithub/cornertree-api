const express = require("express");
const router = express.Router();

const jobsController = require("../controllers/jobControllers");

router.get("/jobPost", jobsController.jobSubmit);

module.exports = router;
