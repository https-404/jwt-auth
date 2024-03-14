const UserModel = require("../models/UserModel");
//const bcrypt = require('brcypt');

module.exports = {
    // Create and Save a new User
     login:(req, res) => {
        res.send('Login Success');
    },
    //register user
    register: (req, res) => {
        console.log(req.body)
        const usermodel = UserModel.create(req.body);
        //usermodel.password = await bcrypt.hash(req.body.password, 10);
        try {
            const response = usermodel.save();
            response.password = undefined;
            return res.status(201).json({
                message : "Successfully Registered!",
                data: response
            })
        } catch (error) {
            return res.status(500).json({
                message: "Server Side Internal Error!",
                error   
            })
        }
        res.send('Register Success');
    }
};