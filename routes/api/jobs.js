const express = require('express');
const router = express.Router()
const jobCtrl = require('../../controllers/api/jobs')

router.post("/", jobCtrl.create)
router.get("/jobs", jobCtrl.index)

module.exports = router;
