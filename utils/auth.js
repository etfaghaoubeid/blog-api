const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.hashPassword = async(password)=>{
    try {
        const hashedPassword =  await bcrypt.hash(password, 10)
        return hashedPassword;
        
    } catch (error) {
        console.log(error.message)
        return password;
    }
}
exports.atighMiddleware =(req ,res, next)=>{
    console.log("atigh middleware 11111");
    next();
}
exports.isMatch = async (password ,incryptedPassword )=>{
    try{
        const matched = await bcrypt.compare(password , incryptedPassword)
      return matched
    }catch(erro){
     return false
    }

};
exports.generateAccessToken = (user)=>{
  return jwt.sign(user ,process.env.SEKRET_KEY,{expiresIn:"600s"})
}
// exports.authanticateToken =async(req ,res, next)=>{
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];
//     if(!token) return res.sendStatus(401);
//     try {
//         const user =  jwt.verify(token, process.env.SEKRET_KEY)
//       req.userId = user.id
//       req.user = user;
//     } catch (error) {
//       res.sendStatus(403)
//     }
//     next()
// }