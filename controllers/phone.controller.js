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
        const {name,isUsed,price,memory,description,image,inStock,brand , imei, quantity} = req.body;
        const phone = new Phone({
            name,
            price,
            memory,
            brand,
            isUsed,
            description,
            image, 
            inStock, 
            imei, 
            quantity
            } )
         const savedPhone =   await phone.save();
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
        const {name,price,memory,brand,image,isUsed,description,inStock,imei, quantity} = req.body;
        const phoneToUpdate = await Phone.findByPk(id);
        if(!phoneToUpdate){
            return res.status(400).json({message:"Bad request"})
        }

        phoneToUpdate.name = name || phoneToUpdate.name
        phoneToUpdate.price = price || phoneToUpdate.price
        phoneToUpdate.memory = memory || phoneToUpdate.memory;
        phoneToUpdate.brand = brand || phoneToUpdate.brand;
        phoneToUpdate.image = image || phoneToUpdate.image
        phoneToUpdate.isUsed = isUsed || phoneToUpdate.isUsed
        phoneToUpdate.description = description || phoneToUpdate.description
        phoneToUpdate.inStock = inStock || phoneToUpdate.inStock;
        phoneToUpdate.imei = imei || phoneToUpdate.imei;
        phoneToUpdate.quantity = quantity || phoneToUpdate.quantity;
        
        
        const updatedPhone = await phoneToUpdate.save();
        if(!updatedPhone){
            return res.status(400).json({message:"Bad request"})
        }
         const savedPhone =   await updatedPhone.save();
        return res.status(201).json({savedPhone , message:"Phone was updated successfuly"})
    } catch (error) {
        return res.status(401).json({message:"unauthorized"})
        
    }

}