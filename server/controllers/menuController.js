//const db = require("../models");
const { Menu } = require('../models');

// Defining methods for the menuController
module.exports = {
  // get a menu page with all menu items
  async getMenu(req, res) {
    const fullMenu = await Menu.findAll({
      
    });

    if (!fullMenu) {
      return res.status(400).json({ message: 'Cannot find menu!' });
    }

    res.json(fullMenu);
  }, 

  // get a single menu item 
  
  async getSingleMenu({menu, params}, res) {
    //console.log(menu);
    try {
      const singleMenuItem = await Menu.findOne({
        $or: { _id: menu ? menu._id : params.id }
       
      });

      if (!singleMenuItem) {
        return res.status(400).json({ message: 'Cannot find a Menu Item!' });
      }
       res.json(getSingleMenu);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  
}
  // findAll: function (req, res) {
  //   db.Menu.find(req.query)
  //     .sort({ date: -1 })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // findById: function (req, res) {
  //   db.Menu.findById(req.params.id)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // create: function (req, res) {
  //   db.Menu.create(req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // update: function (req, res) {
  //   db.Menu.findOneAndUpdate({ _id: req.params.id }, req.body, {
  //     new: true,
  //   })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.Menu.findById({ _id: req.params.id })
  //     .then((dbModel) => dbModel.remove())
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
