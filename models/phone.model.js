const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/config.db");
const TABLE_NAMES = require("../constants/table.names");
const Phone = db.define("phone", {
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    }, 
    price:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    memory:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    brand:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    isUsed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    },
    description:{
        type:DataTypes.STRING
    },
    inStock:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    quantity:{
        type:DataTypes.INTEGER,
    }, 
    imei:{
        type:DataTypes.STRING
    },
    images:{
        type:DataTypes.ARRAY(DataTypes.STRING)
    },
    
});
db.sync({alter:true})
module.exports = Phone;