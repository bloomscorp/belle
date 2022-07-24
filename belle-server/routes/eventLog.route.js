const router = require('express').Router();

router
    .get('/', [], (req, res, next) => {
        res.send('Hello from /event/log');
    })
    .post('/', [], (req, res, next) => {
        res.send(req.body);
    });

module.exports = router;
