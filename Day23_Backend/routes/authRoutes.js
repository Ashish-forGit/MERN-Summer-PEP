const exprees = require('express')
const {signUp} = require('../controller/authController.js')
const authRouter = exprees.Router();

authRouter.route('/signup').post(signUp)


module.exports = {authRouter};