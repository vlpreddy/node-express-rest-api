const express = require('express');
const router = express.Router();
const domainController = require('../controller/domainController');

router.post('/', domainController.createDomain);
module.exports = router;