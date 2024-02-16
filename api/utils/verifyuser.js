import jwt from "jsonwebtoken";
import errorHandler from './error.js';


export const verifytoken = (req, res, next) => {
    const token = req.cookies.access_token; // Corrected cookie name
    if (!token) {
        return next(errorHandler(401, "Unauthorized"));
    }
    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            return next(errorHandler(401, "Forbidden"));
        }
        req.user = user;
        next();
    });
};
