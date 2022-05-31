const jwt = require("jsonwebtoken");


const authUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        // getting token from headers 
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                res.status(403).json("Token is invalid");
            }
            req.user = user;
            next();
        })
    }
    else {
        res.status(401).json("You are not autherized");
    }
}


module.exports = {authUser}