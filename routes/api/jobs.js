const express = require('express');
const router = express.Router()
const jobCtrl = require('../../controllers/api/jobs')

router.get("/", jobCtrl.index)
router.post("/", jobCtrl.create)
router.delete("/delete/:_id", jobCtrl.delete)
router.put("/edit/:_id", jobCtrl.edit)
module.exports = router;
