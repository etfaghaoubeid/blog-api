const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/config.db");
const TABLE_NAMES = require("../constants/table.names")
const Post = db.define("post", {
    title:{
        type:DataTypes.STRING
    }, 
    content:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING
    }, 
    
});//,db.sync({alert:true})
db.sync({alter:true})
module.exports = Post;