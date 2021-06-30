const User = require("../models/user.model");

exports.login = async(req ,res)=>{
    try {
        const {email , password} = req?.body;
        const user = await User.findOne({email});
        if(user&&password == user?.password){
          return res.sendStatus(201).json({message:"succefuly loged in"});
          
        }
        return res.sendStatus(401).json({message:"email or password incorrect"})
        
    } catch (error) {
        return res.sendStatus(401).json({message:"bad request"})
        
    }

}
exports.signUp = async(req ,res)=>{
    try{
        const {name , password , username , email} = req.body;

        const user = await User.create({name , password ,username, email});
        return res.status(201).json({user, message: "user created successfuly"});
    }
    catch(erro){
        return res.sendStatus("401").json({message: "bad request"});
    }
    res.send("signUp")
}
exports.getUsers = async (req , res)=>{
    try {

        const users = await User.findAll({});
        return res.status(200).json({users , message:"get users success"});
    } catch (error) {
        return res.sendStatus(401).json({message:"bad request"});
    }
}
exports.login = async(req, res)=>{
    try {
        const {email, password } = req?.body;
        const user = await User.findOne({email});
        if(user&& user?.password ==password){
            return res.status(200).json({user , message:"loged in successfully"})

        }
        return res.status(401).json({message:"email or password incrrect"});

    } catch (error) {
        return res.status(400).json({message:"bad request"});

    }
    
}
exports.signUp = async(req, res)=>{
  try {
    console.log('hit signup')
      const {name , password , username, email} = req?.body
      const user = new User({name , username, password, email});
      const savedUser = await user.save();
      return res.sendStatus(201).json({savedUser , message:"user saved successfuly"})

  } catch (error) {
      return res.status(401).json({message: "bad request"})
      
  }
}