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
      const singleMenuItem = await Menu.findById(req.params.id);

      if (!singleMenuItem) {
        return res.status(400).json({ message: 'Cannot find a Menu Item!' });
      }
      console.log('Request Id:', req.params.id);

       res.json(getSingleMenuItem);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  
}

module.exports = menu;
