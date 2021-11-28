const { default: Vip } = require('../../client/src/components/Vip');
const { VipMember } = require('../models');

module.exports = {

// get all VipMembers
// async getVipMember(req, res) {
//     const allVipMembers = await VipMember.findAll({
        
// });
// if(!allVipMembers){
//     return res.status(400).json({ message: 'Cannot find Member!'});
// }
// res.json(allVipMembers);
// },

//  create VipMember
async postVipMember({ body }, res) {
const vipMember = await VipMember.create(body);

if (!vipMember) {
    return res.status(400).json({ message: 'Something is wrong!' });
}

res.json(vipMember);
},



// remove a review from savedReviews
async deleteReview({ review, params }, res) {
const updatedReview = await Review.findOneAndUpdate(
    { _id: review._id },
    { $pull: { postReviews: { review_id: params.review_id } } },
    { new: true }
);
if (!updatedReview) {
    return res.status(404).json({ message: "Couldn't find menu with this id!" });
}
return res.json(updatedReview);
},

}

// Get reviews index  /menu/:id/reviews
// router.get('/', (req, res, next) => {
//  res.send('INDEX /menu/:id/reviews'); 
//})

// Get new reviews  /menu/:id/reviews/new
//router.get('/new', (req, res, next) => {
 //   res.send('NEW /menu/:id/reviews/new');
//});

//create reviews   /menu/:id/reviews
router.post('/', (req, res, next) => {
    res.send('CREATE /menu/:id/reviews');
});

//Get reviews show  /menu/:id/reviews/:review_id
//router.get('/:review_id', (req, res, next) => {
//    res.send('SHOW /menu/:id/reviews/:review_id');
//});

//Get reviews to edit  /menu/:id/reviews/:review_id/edit
router.get('/:review_id/edit', (req, res, next) => {
    res.send('EDIT /menu/:id/reviews/:review_id/edit');
});

//Put reviews update  /reviews/:review_id
router.put('/:review_id', (req, res, next) => {
    res.send('UPDATE /menu/:id/reviews/:review_id');
});

//Delete reviews destroy  /reviews/:review_id
router.delete(':review_id', (req, res, next) => {
    res.send('DELETE /menu/:id/reviews/:review_id')
});

