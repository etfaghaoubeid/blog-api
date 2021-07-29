const Phone = require("../models/phone.model");
const phonesData = require("./phones.data")

exports.postUp = async (req, res) => {
     await Post.drop(); 
    const post = await Post.create({ title:"title",image: "atigh image" , content:"Content" });
    console.log("Post seedm")
} 


exports.phonesUp = async ()=>{
    await Phone.drop;
    phonesData.map(async( phone)=>{
        const newPhone =  new Phone(phone);
        const savedPhone = await newPhone.save();
        console.log("saved")
        return savedPhone
    });
}