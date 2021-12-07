const { Usuario } = require('../models');

const homeController = {
  viewHome: (_req, res) => {
    return res.render('home');
  },
  saveUSer: async (req, res) => {
    const { name, email, message } = req.body;

    try {
      await Usuario.create({ name, email, message });
      return res.redirect('/');
    } catch (e) {
      console.error(e);
    }
  },
};

module.exports = homeController;
