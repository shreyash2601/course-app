const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    try {
        let token = req.header("token");
        if(!token) return res.status(403).json({success: false, message: "Access Denied"});
    
        if(token.startsWith("Bearer ")){
            token = token.slice(7, token.length);
        }
        const data = jwt.verify(token, "usersecret");
        req.user = data;
        next();
      } catch (error) {
        return res
        .status(500)
        .json({ success: false, message: error.message });
      }
}

module.exports = userMiddleware;