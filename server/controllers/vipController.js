//const { default: Vip } = require('../../client/src/components/Vip');
const { Vip } = require('../models');

const vip = {
    getVip: async function(req, res) {
       try{
  const vip = await req.body;
       } catch( error){
           console.log('Error: ', error.message);
       }
       console.log(vip)
      return res.status(200).json(vip);
  }
  }
  module.exports = vip;

//module.exports = {

// get all VipMembers

// getVip: async function(req, res) {
//     const vipMember = await Vip.find({

//     })
//     if (!vipMember) {
//         return res.status(400).json({ message: 'Cannot find Vip Member!' });
//       }
  
//       res.status(200).json(vipMember);
//     }, 


//  addVip: async function(parent, args) {
//     const vipMember = await Vip.create(args);
//     //const token = signToken(user);
// if(!vipMember){
//     return res.status(400).json({ message: 'Cannot find Member!'});
// }
// res.status(200).json(vipMember);
// },

// //  create VipMember
// postVip: async function({ body }, res) {
// const vipMember = await Vip.create(body);

// if (!vipMember) {
//     return res.status(400).json({ message: 'Something is wrong!' });
// }

// res.status(200).json(vipMember);
// },



// // remove a review from savedReviews
// async deleteReview({ review, params }, res) {
// const updatedReview = await Menu.findOneAndUpdate(
//     { _id: review._id },
//     { $pull: { postReviews: { review_id: params.review_id } } },
//     { new: true }
// );
// if (!updatedReview) {
//     return res.status(404).json({ message: "Couldn't find menu with this id!" });
// }
// return res.json(updatedReview);
// },

//}


