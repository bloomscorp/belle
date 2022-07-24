const router = require('express').Router();
const eventLogController = require('../controllers/eventLog.controller');

router
    .get('/', [], (req, res, next) => {
        eventLogController.getAllEventLogs(req, res).then(next).catch(next);
    })
    .post('/', [], (req, res, next) => {
        eventLogController.postEventLog(req, res).then(next).catch(next);
    });

module.exports = router;
