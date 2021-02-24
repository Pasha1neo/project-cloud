const jwt = require('jsonwebtoken')
const SECRETKEY = 'pasha1neo'

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            return res.status(401).json({message: 'Auth error'})
        }
        const decoded = jwt.verify(token, SECRETKEY)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({message: 'Auth error'})
    }
}
