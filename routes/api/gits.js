const express = require('express');
const router = express.Router()
const gitCtrl = require('../../controllers/api/gits')

router.get("/", gitCtrl.index)
router.post("/", gitCtrl.create)

module.exports = router;
