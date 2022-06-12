const authController = require('../controllers/auth.controller');

module.exports = (router) => {
    router.post('/auth/register', (req, res, next) => {
        authController.register(req.body).then(next).catch(next);
    })
};