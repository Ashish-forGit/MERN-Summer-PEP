const { userModel } = require('../model/userModel'); // Adjust the path as necessary
const bcrypt = require('bcrypt'); // Ensure using bcryptjs as it's more common
const jwt = require('jsonwebtoken'); // Assuming you will use JWT for authentication
const dotenv = require('dotenv');

dotenv.config();

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Log the request body
        console.log(req.body);

        // Check if the email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: 'fail',
                message: 'User already exists'
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a new user
        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword
        });

        // Return success response with the new user's id
        res.status(201).json({
            status: 'success',
            message: 'User created',
            data: {
                user: {
                    id: newUser._id,
                    name: newUser.name,
                    email: newUser.email
                }
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};


const logIn = async (req, res) => {
    console.log(req.body);
    try {
        const { email, password } = req.body;

        // Check if the email exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                status: 'fail',
                message: 'Invalid email or password'
            });
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                status: 'fail',
                message: 'Invalid email or password'
            });
        }

        // Log in the user
        res.status(200).json({
            status: 'success',
            message: 'User logged in',
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};


module.exports = { signUp, logIn };
