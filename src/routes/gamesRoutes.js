const express = require('express');
const controller = require('../controllers/gamesControllers');
const router = express.Router();
const cors = require('cors');

router.put('/games/:id', cors(), controller.updateAllGame);

router.patch('/games/:id', cors(), controller.updatePartGame);

module.exports = router