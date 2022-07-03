const jwt = require('jsonwebtoken');

class JWTService {

    secret = process.env.JWT_SECRET || 'someSecretKey';

    constructor() { }
    
    getAccessToken(payload) {
        return jwt.sign(payload, this.secret, { expiresIn: '1d' });
    }

    verifyAccessToken(token) {
        return jwt.verify(token, this.secret);
    }
}

module.exports = new JWTService();