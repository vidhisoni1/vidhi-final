const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.redirect('/user/login')
        }

        const payload = jwt.verify(token, 'password', (err, decoded) => {
            if (err) {
                return res.redirect('/user/login')
            }
            return decoded
        })

        if (!payload) {
            return res.redirect('/user/login')
        }

        const user = await userModel.findById(payload.sub)

        if (!user) {
            return res.redirect('/user/login')
        }

        req.user = user
        res.locals.user = user
        next()
    } catch (error) {
        console.log(error)
        res.send('error')
    }
}

module.exports = authenticate