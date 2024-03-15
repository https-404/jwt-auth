const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');

module.exports = {
    // Create and Save a new User
     login:(req, res) => {
        res.send('Login Success');
    },
    //register user
    register: async (req, res) => {
       
        const usermodel = UserModel.create(req.body);
        usermodel.password = await bcrypt.hash(req.body.password, 10);
        //console.log("Password decrypted");
        try {
            const response = (await usermodel).save();
           // response.password = undefined;
           console.log(response);
            return res.status(201).json({
                message : "Successfully Registered!",
                data: response
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message || "Some error occurred while creating the User.",
                  
            })
        }
        res.send('Register Success');
    }
};