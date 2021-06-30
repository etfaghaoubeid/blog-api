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

exports.isMatch = async (password ,incryptedPassword )=>{
    try{
        const matched = await bcrypt.compare(password , incryptedPassword)
      return matched
    }catch(erro){
     return false
    }

}