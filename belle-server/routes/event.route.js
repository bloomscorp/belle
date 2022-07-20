const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');

router
    .get('/', [auth.authorise], (req, res, next) => {
        res.send('Hello from /event route');
    })
    .get('/:eventId', [auth.authorise], (req, res, next) => {
        res.send(`Hello from /event/${req.params.eventId}`);
    })
    .post('/', [auth.authorise], (req, res, next) => {
        res.send(req.body);
    })
    .put('/:eventId', [auth.authorise], (req, res, next) => {
        res.send('Event updated');
    })
    .delete('/:eventId', [auth.authorise], (req, res, next) => {
        res.send('Event deleted sucessfully');
    });

module.exports = router;
