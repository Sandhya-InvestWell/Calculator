const express = require('express');
const { getDataController } = require('./controlller');
const router = express.Router();

router.post('/data', getDataController);

module.exports =  router