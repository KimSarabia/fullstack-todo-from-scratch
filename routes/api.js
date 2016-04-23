'use strict';

var express = require('express');
var router = express.Router();

// /api/todos

router.use('/todos', require('./todos'))

module.exports = router;
