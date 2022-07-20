const router = require('express').Router();
const eventController = require('../controllers/event.controller');
const auth = require('../middlewares/auth.middleware');

router
    .get('/', [auth.authorise], (req, res, next) => {
        eventController.getAllEvents(req, res).then(next).catch(next);
    })
    .get('/:eventId', [auth.authorise], (req, res, next) => {
        eventController.getEvent(req, res).then(next).catch(next);
    })
    .post('/', [auth.authorise], (req, res, next) => {
        eventController.postEvent(req, res).then(next).catch(next);
    })
    .put('/:eventId', [auth.authorise], (req, res, next) => {
        eventController.updateEvent(req, res).then(next).catch(next);
    })
    .delete('/:eventId', [auth.authorise], (req, res, next) => {
        eventController.deleteEvent(req, res).then(next).catch(next);
    });

module.exports = router;
