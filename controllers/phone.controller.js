const Phone = require("../models/phone.model");

exports.getPhones = async (req, res) => {
    try {
        const phones = await  Phone.findAll();
        if(phones){
            return res.status(200).json({phones , message:"Get phones successfuly"});
        };
        return res.status(401).json({message:"Unauthorized"})
        
    } catch (error) {
        return res.status(500).json({message:"Something went wront"})
        
    }
} 
exports.getPhone = async (req, res) => {
    try {
        const {id} = req.params
        const phone = await Phone.findByPk(id);
        if(phone){
            return res.status(200).json({phone , message:"get Phone successfuly"})
        }
        return res.status(401).json({message:"invalid request"})
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"})
    }
};
exports.addPhone = async (req, res) => {
    try {
        const {name,isUsed,price,description,image,inStock,brand} = req.body;
        console.log(req.body ,"req.body ,111111111111" )
        const Phone = new Phone({
            name,
            brand,
            isUsed,
            price,
            description,
            image, 
            inStock
            } )
         const savedPhone =   await Phone.save();
        return res.status(201).json({savedPhone , message:"Phone was created successfuly"})
    } catch (error) {
        return res.status(401).json({message:"unauthorized"})
        
    }
   
}
exports.deletePhone = async (req, res) => {
    try {
        const {id} = req.params;
        await Phone.destroy({where:{
            id
        }}); 
        return res.status(201).json({message:"Phone deleted successfuly"})
        
    } catch (error) {
       return res.status(401).json({message:"You are unauthorized to delete"})
    }
};
exports.updatePhone = async (req, res) => {
    try{
        const {id} = req.params
        const {name,isUsed,price,description,image,inStock,brand} = req.body;
        const phoneToUpdate = Phone.findByPk(id);
        if(!phoneToUpdate){
            return res.status(400).json({message:"Bad request"})
        }
        phoneToUpdate.name = name || phoneToUpdate.name
        phoneToUpdate.isUsed = isUsed || phoneToUpdate.isUsed
        phoneToUpdate.price = price || phoneToUpdate.price
        phoneToUpdate.description = description || phoneToUpdate.description
        phoneToUpdate.image = image || phoneToUpdate.image
        phoneToUpdate.inStock = inStock || phoneToUpdate.inStock;
        phoneToUpdate.brand = brand || phoneToUpdate.brand;
        const updatedPhone = await phoneToUpdate.save();
        if(!updatedPhone){
            return res.status(400).json({message:"Bad request"})
        }
         const savedPhone =   await Phone.save();
        return res.status(201).json({savedPhone , message:"Phone was updated successfuly"})
    } catch (error) {
        return res.status(401).json({message:"unauthorized"})
        
    }

}