const { DataTypes } = require("sequelize");
const db = require("../config/config.db");
const TABLE_NAMES = require("../constants/table.names");
const Post = require("./post.model");
const User = db.define("user", {
    name:{
      type:DataTypes.STRING
    }, 
    username:{
      type:DataTypes.STRING
    }, 
    email:{
        type:DataTypes.STRING
    }, 
    password:{
     type:DataTypes.STRING
    },
    

});// db.sync({alter:true})
 db.sync({alter:true})

 User.hasMany(Post, {onUpdate:"CASCADE"}); //{onDelete:"CASCADE" , ON UPDATE CASCADE}
Post.belongsTo(User ,{onUpdate:"CASCADE"})
module.exports = User;