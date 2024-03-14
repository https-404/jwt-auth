const joi = require('joi');

const userRegisterValidation = (req,res, next) => {
    const Schema = joi.object({
        fullname: joi.string().min(3).max(20).required(),
        role: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).max(20).alphanum().required(),
    });

    const {error, Value} = Schema.validate(req.body);

    if(error){
        return res.status(400).json({
            message:"Bad Request ", error,
        });
    } 
    next();

}; 

module.exports = {
    userRegisterValidation,
};