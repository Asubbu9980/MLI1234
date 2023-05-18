var express = require('express');
var router = express.Router();
var patientsController=require("../controllers/patients")

router.get('/',patientsController.getPatients)
router.post('/', patientsController.postPatient);
module.exports = router;