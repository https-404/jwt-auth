const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports = {
    // Create and Save a new User
     login:(req, res) => {
        res.send('Login Success');
    },
    //register user
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
    }
};