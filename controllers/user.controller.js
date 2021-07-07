const User = require("../models/user.model");
const { hashPassword, isMatch, generateAccessToken } = require("../utils/auth");
exports.signUp = async(req, res)=>{
  try {
      const {name , password , username, email} = req?.body
      const hashedPassword = await hashPassword(password);
      const user = new User({name , username, password:hashedPassword, email});
      const savedUser = await user.save();
      return res.status(201).json({savedUser , message:"user saved successfuly"})

  } catch (error) {
      console.log(error, "errorrr messge")
      return res.status(401).json({message: "bad request"})
      
  }
}
exports.getUsers = async (req , res)=>{
    try {

        const users = await User.findAll({});
        return res.status(200).json({users , message:"get users success"});
    } catch (error) {
        return res.status(401).json({message:"bad request"});
    }
}
exports.login = async(req, res)=>{
    try {
        const {email, password } = req?.body;
        const user = await User.findOne({where:{email}});
        const match = await isMatch( password, user.password )
        const accessToken =  generateAccessToken({id:user.id, name:user.name , email:user.email ,username:user.name});
        if(user && match){
            return res.status(200).json({id:user.id,name:user.name ,email:user.email,username:user.username , accessToken, message:"loged in successfully"})
        }
        return res.status(401).json({message:"email or password incrrect"});

    } catch (error) {
        return res.status(401).json({message:"bad request"});

    }
    
}
exports.logOut = async(req ,res)=>{
    // req.user.accessToken = null ;
    console.log(req.user)
    res.send("logout")

}