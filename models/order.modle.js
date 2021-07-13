const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/config.db");
const Order = db.define("Order", {
    total:{
        type:DataTypes.FLOAT,
        allowNull:false,
    }, 
    orderStatus:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    shippingCost:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    shippingAdress:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
db.sync({alter:true})
module.exports = Order;