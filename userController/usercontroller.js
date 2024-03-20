/**
 * User Controller module.
 * @module userController
 */

const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    /**
     * Login function to authenticate user.
     * @async
     * @function login
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Object} - The response object containing JWT token and user object.
     */
    login: async (req, res) => {
        try {
            const user = await UserModel.findOne({email: req.body.email});
            if (!user) {
                return res.status(404).json(
                    {
                        message: 'Auth Failure!, User Not Found. Please Register'
                    }
                )
            }

            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (!validPassword) {
                return res.status(401).json(
                    {
                        message: 'Auth Failure!, Invalid Password OR User'
                    }
                )
            }

            const tokenObject = {
                email: user.email,
                userId: user._id,
                fullname: user.fullname,
                role : user.role
            }

            const jwttoken = jwt.sign(tokenObject, process.env.SECRET, {expiresIn: '1h'});

            return res.status(200).json(
                {
                    jwttoken, tokenObject
                }
            )

            
        } catch (error) {
            return res.status(500).json({message: 'error', error});
        }
       
    },
    /**
     * Register function to create and save a new user.
     * @async
     * @function register
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Object} - The response object containing success message and user data.
     */
    register: async (req, res) => {
        const userModel = new UserModel(req.body);
        userModel.password = await bcrypt.hash(req.body.password, 10);
        try{
            const response = await userModel.save();
            response.password = undefined;
            return res.status(201).json({message:'success', data: response});
        }catch(err){
            return res.status(500).json({message: 'error', err});
        }
    },

    getUsers : async (req, res) => {
        try {
            const users = await UserModel.find({},{password:0, createdAt:0, _id:0});
            return res.status(200).json({message: 'success', data: users});
        } catch (error) {
            return res.status(500).json({message: 'error', error});
        }

    },
};

