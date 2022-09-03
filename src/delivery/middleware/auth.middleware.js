const { json } = require("express");

const AuthMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({
                "message": "Unauthorized"
            })
        }
        const token = authHeader.replace("Bearer ","");
        console.log(token);
        if (token !== 'authorization') {
            return res.status(401).json({
                "message": "Token incorrect!"
            })
        }
        json.verify(token, process.env.TOKEN_SECRET,"",NULL);
        next();
    } catch (err) {
        res.status(401).json({
            "message": err.message
        })
    }
}
module.exports = AuthMiddleware;
