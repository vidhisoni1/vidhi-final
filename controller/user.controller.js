const productModel = require('../models/product.model')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

getSignup = (req, res) => {
    res.render('pages/signup')
}

signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await userModel.findOne({ email })
        console.log(user)
        if (user) {
            return res.redirect('back')
        }

        const data = await userModel.create({ name, email, password })

        res.redirect('/user/login')
    } catch (error) {
        res.redirect('back')
    }

}

getLogin = (req, res) => {
    res.render('pages/login')
}

login = async (req, res) => {

    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email, password })

        if (!user) {
            return res.redirect('back')
        }

        const payload = {
            sub: user._id,
            name: user.name
        }

        const token = jwt.sign(payload, 'password', {
            expiresIn: '1d'
        })

        res.cookie('token', token)
        if (user.role === 'user') {
            return res.redirect('/user/product')
        }
        res.redirect('/')

    } catch (error) {
        res.redirect('back')
    }

}

logout = async (req, res) => {
    res.clearCookie('token')
    res.redirect('/user/login')
}

product = async (req, res) => {
    const products = await productModel.find()
    res.render('pages/products', { products })
}

module.exports = { getSignup, signup, getLogin, login, product, logout };