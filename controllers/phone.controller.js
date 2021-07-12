const Phone = require("../models/phone.model");

exports.getPhones = async (req, res) => {
    const phones = await  Phone.findAll();
   
    res.json(phones)   

} 
exports.getPhone = async (req, res) => {
    res.send("get Phone" , req.user)
};
exports.addPhone = async (req, res) => {
    try {
        // const {title  , image ,content, userId} = req.body;
        // console.log(req.body ,"req.body ,111111111111" )
        // const Phone = new Phone({title, image ,content ,userId:1/*req.userId}*/})
        // const savedPhone =   await Phone.save();
        // return res.status(201).json({savedPhone , message:"Phone was created successfuly"})
    } catch (error) {
        return res.status(401).json({message:"unauthorized"})
        
    }
   
}
exports.deletePhone = async (req, res) => {
    res.send("delte Phone")

};
exports.updatePhone = async (req, res) => {
    res.send("update Phone")

}