/**
 * Validates the user registration data.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */

const joi = require("joi");

const userRegisterValidation = (req, res, next) => {
    // Define the validation schema using Joi
    const Schema = joi.object({
        fullname: joi.string().min(3).max(20).required(),
        role: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).max(20).alphanum().required(),
    });

    // Validate the request body against the schema
    const { error, value } = Schema.validate(req.body);

    // If validation fails, return a 400 Bad Request response with the error details
    if (error) {
        return res.status(400).json({
            message: "Bad Request",
            error,
        });
    }

    // If validation succeeds, call the next middleware function
    next();
};

/**
 * Validates the user login data.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
const userLoginValidation = (req, res, next) => {
    // Define the validation schema using Joi
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).max(20).alphanum().required(),
    });

    // Validate the request body against the schema
    const { error, value } = Schema.validate(req.body);

    // If validation fails, return a 400 Bad Request response with the error details
    if (error) {
        return res.status(400).json({
            message: "Bad Request",
            error,
        });
    }

    // If validation succeeds, call the next middleware function
    next();
};

module.exports = {
    userRegisterValidation,
    userLoginValidation,
};
