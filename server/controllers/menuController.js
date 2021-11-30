
// import user model
const { Menu, Review } = require('../models');

menu = {
  // get a menu page with all menu items
  getMenu: async function(req, res) {
    const fullMenu = await Menu.find({
 
    });

    if (!fullMenu) {
      return res.status(400).json({ message: 'Cannot find menu!' });
    }

    res.status(200).json(fullMenu);
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

       res.status(200).json(singleMenuItem);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  // get all reviews
 getReviews: async function(req, res) {
  try{
    //console.log(req.params.id);
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
postReview: async function(req, res) {
console.log(req.body, req.params.id);
  // try {
  //   const review = new Review();
  //   review.text = req.body.reviews;
  //   review.save(err => {
  //     if(err) return err;
  //     return res.json({message: review})
  //   })

  //   res.status(200).json(newReview);
  // } catch (err) {
  //   return res.status(400).json({message: err});
  // }

  const reviews = await Menu.create(
    {reviews: req.body.reviews},
    { $addToSet: { reviews: req.body.reviews } },
  
  );
  if (!reviews) {
    return res.status(400).json({ message: 'Something is wrong!' });
  }
  
  res.status(200).json(reviews);

},

// update review
updateReview: async function(req, res) {
  //console.log(review);

  try {
    const updatedReview = await Menu.findOneAndUpdate(
      { _id: req.params.id },
      
      { $addToSet: { reviews: req.body.reviews } },
      { new: true }
    );
    return res.json(updatedReview);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
},
// remove a review from savedReviews
deleteReview: async function( req, res) {
  const updatedReview = await Menu.findOneAndUpdate(
    { _id: req.params.id },
    { $pull: { reviews: req.body.reviews } },
    { new: true }
  );
  if (!updatedReview) {
    return res.status(404).json({ message: "Couldn't find menu with this id!" });
  }
  return res.json(updatedReview);
}, 

}

module.exports = menu;

