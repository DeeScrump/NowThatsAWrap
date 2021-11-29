
// import user model
const { Menu } = require('../models');

menu = {
  // get a menu page with all menu items
  getMenu: async function(req, res) {
    const fullMenu = await Menu.find({
 
    });

    if (!fullMenu) {
      return res.status(400).json({ message: 'Cannot find menu!' });
    }

    res.json(fullMenu);
  }, 

  // get a single menu item 
  
 getSingleMenu: async function(req, res) {
    //console.log(menu);
    //const { id } = req.params;
    try {
      console.log(req.params.id);
      const singleMenuItem = await Menu.findById(req.params.id);

      if (!singleMenuItem) {
        return res.status(400).json({ message: 'Cannot find a Menu Item!' });
      }
      console.log('Request Id:', req.params.id);

       res.json(singleMenuItem);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  // get all reviews
 getReviews: async function(req, res) {
  try{
    console.log(req.params.id);
    const allReviews = await Menu.findById(req.params.id);
    
    res.status(200).json(allReviews.reviews);
  } catch (error) {
    res.status(400).json({ message: 'Cannot find review!'});
  }
if(!allReviews){
    return res.status(400).json({ message: 'Cannot find  All review!'});
}

},
//  create review
postReview: async function({ body }, res) {

  const reviews = await Menu.create(body.reviews);

  if (!reviews) {
    return res.status(400).json({ message: 'Something is wrong!' });
  }
  
  res.json(reviews.reviews);

},

// update review
updateReview: async function({ review, body }, res) {
  console.log(review);
  try {
    const updatedReview = await Menu.findOneAndUpdate(
      { _id: review._id },
      { $addToSet: { savedReviews: body } },
      { new: true }
    );
    return res.json(updatedReview.reviews);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
},
// remove a review from savedReviews
deleteReview: async function({ review, params }, res) {
  const updatedReview = await Menu.findOneAndUpdate(
    { _id: review._id },
    { $pull: { postReviews: { review_id: params.review_id } } },
    { new: true }
  );
  if (!updatedReview) {
    return res.status(404).json({ message: "Couldn't find menu with this id!" });
  }
  return res.json(updatedReview.reviews);
}, 

}

module.exports = menu;

