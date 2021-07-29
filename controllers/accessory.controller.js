const Accessory = require("../models/accessory.model");
const Phone = require("../models/phone.model");

exports.getAccessories = async (req ,res)=>{
   try {
       const accessories = await Accessory.findAll({});
       return res.status(200).json({accessories,message:"Fetch accessories successfuly"})
       
   } catch (error) {
       return res.status(500).json({message:"server errorrr "})
   }

};
exports.getAccessory = async (req ,res)=>{
    try {
        const  {id} =req.params
        const accessory = await Accessory.findByPk(id);
        // const accessory = await reseponse.json();
        return res.status(200).json({accessory,message:"Fetch accessory successfuly"})
        
    } catch (error) {
        return res.status(500).json({message:"server error "})
    }

};
exports.updateAccessory = async (req, res)=>{
    try {
        const {id } = req.params;
        const {name , price , description , inStock , image} = req.body;
        const  accessory = await Accessory.findByPk(id);
        if(accessory){
            accessory.name = name || accessory.name;
            accessory.price = price || accessory.price;
            accessory.description = description|| accessory.description;
            accessory.inStock = inStock || accessory.inStock;
            accessory.image = image || accessory.image;
            const savedAccessory =  await accessory.save();
            return res.status(201).json(
                {
                savedAccessory , 
                message:"Accessory updated saccessfuly"
               }
            );
        }
        return res.status(401).json({message:"request error "})
    } catch (error) {
        return res.status(501).json({message:"server error "})
        
    }


};
exports.deleteAccessory = async (req ,res)=>{
    try {
        const {id } = req.params;
        await Accessory.destroy({where:{
            id
        }})
        return res.json({id , message:"resource deleted successfuly "})
    } catch (error) {
        return res.status(501).json({message:"server error "}) 
    }

}
exports.addAccessory = async (req ,res)=>{
    try {
        const {name , price , description , inStock , image} = req.body;
        console.log("name" , name)
        const  accessory = new Accessory({name , price, description, inStock, image});
        console.log("accessory", accessory)
        const savedAccessory = await accessory.save();
        console.log(savedAccessory,"111111111111")
        if(savedAccessory){
            return res.status(201).json({savedAccessory , message:"Accessory updated saccessfuly"})
        }
        return res.status(401).json({message:"Something went wrong "})
    } catch (error) {
        console.log("reeoor" , error)
        return res.status(501).json({message:"server error "})
        
    }

}
