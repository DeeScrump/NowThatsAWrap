//const User = require('./User');
//const About = require('./About.js');
const Menu = require('./Menu');
const Category = require('./Category');
//const Order = require('./Order');
//const Contact = require('./Contact.js');
//const Catering = require('./Catering');
const Review = require('./Review');

module.exports = { Menu, Category, Review };


// const VipMember = require('./VipMember');
// const MenuItem = require('./MenuItem');
// const Review = require('.Reviews');
// const Comment = require('./Comments');


// Reviews.belongsTo(VipMember, {
//     foreignKey: 'user_id',
//     onDelete: "CASCADE"
//   });

//   Review.hasMany(Comment, {
//       foreignKey: "drink_id",
//       onDelete: "CASCADE"
//   });
  
//   Comment.belongsTo(User, {
//       foreignKey: 'user_id',
//       onDelete: "CASCADE"
//   });

// module.exports = { User, Review, Comment };

// module.exports = { Menu, Reviews };

