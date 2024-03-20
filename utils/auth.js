/**
 * Middleware function for token authentication.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} - The response object.
 */
const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Middleware function for token authentication.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} - The response object.
 */
const tokenAuthentication = (req, res, next) => {

    // Check if the 'Authorization' header is present in the request
    if (!req.headers['authorization']) {
        // If not present, return a 401 Unauthorized status with an error message
        return res.status(401).json({ message: 'Auth Failure!, No Token Provided' });
    }
    // ...
    // Check if the token is valid
    try {
        const decrypt = jwt.verify(req.headers['authorization'], process.env.SECRET);
        // If the token is valid, set the decrypted token to the request object
        return next();
    } catch (error) {
        // If the token is invalid, return a 403 Forbidden status with an error message
        return res.status(403).json({message: 'Auth Failure!, Invalid/Expired Token'});
    }
};

// Export the module
module.exports= {
    tokenAuthentication,
}