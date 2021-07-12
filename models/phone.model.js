const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/config.db");
const TABLE_NAMES = require("../constants/table.names")
const Phone = db.define("phone", {
    name:{
        type:DataTypes.STRING
    }, 
    isUsed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
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
    
});
db.sync({alter:true})
module.exports = Phone;