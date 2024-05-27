const { Router } = require('express');
const { getSignup, signup, getLogin, login, product, logout } = require('../controller/user.controller');
const authenticate = require('../middleware/auth');

const userRouter = Router()

userRouter.get('/signup', getSignup)
userRouter.post('/signup', signup)

userRouter.get('/login', getLogin)
userRouter.post('/login', login)

userRouter.get('/logout', authenticate, logout)

userRouter.get('/product', authenticate, product)

module.exports = userRouter;