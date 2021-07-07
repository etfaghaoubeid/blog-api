const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/config.db");
const TABLE_NAMES = require("../constants/table.names")
const Accessory = db.define("Accessory", {
    name:{
        type:DataTypes.STRING,
    }, 
    price:{
        type:DataTypes.FLOAT
    }, 
    inStock:{
        type:DataTypes.BOOLEAN,
    },
    description:{
        type:DataTypes.TEXT
    }, 
    image:{
        type:DataTypes.STRING
    }, 
    
});//,db.sync({alert:true})
db.sync({alter:true})
module.exports = Accessory;