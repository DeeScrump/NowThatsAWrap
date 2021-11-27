//const User = require('./User');
// const Menu = require('./Menu');
// const Reviews = require('./Reviews');
//const Category = require('./Category');
//const Order = require('./Order');
//const About = require('./About.js');
//const Home = require('./');
//const Catering = require('./Catering');
//const Contact = require('./Contact.js');

const VipMember = require('./VipMember');
const MenuItem = require('./MenuItem');
const Review = require('.Reviews');
const Comment = require('./Comments');


Reviews.belongsTo(VipMember, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
  });

  Review.hasMany(Comment, {
      foreignKey: "drink_id",
      onDelete: "CASCADE"
  });
  
  Comment.belongsTo(User, {
      foreignKey: 'user_id',
      onDelete: "CASCADE"
  });

module.exports = { User, Review, Comment };

module.exports = { Menu, Reviews };
