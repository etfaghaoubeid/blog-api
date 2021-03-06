const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/config.db");
const TABLE_NAMES = require("../constants/table.names")
const Accessory = db.define("Accessory", {
    name:{
        type:DataTypes.STRING
    }, 
    price:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING
    }, 
    inStock:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
    
});//,db.sync({alert:true})
db.sync({alter:true})
module.exports = Accessory;