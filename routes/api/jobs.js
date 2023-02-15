const express = require('express');
const router = express.Router()
const jobCtrl = require('../../controllers/api/jobs')

router.post("/", jobCtrl.create)
router.get("/jobs", jobCtrl.index)
router.delete("/delete/:_id", jobCtrl.delete)
router.put("/edit/:_id", jobCtrl.edit)
module.exports = router;
