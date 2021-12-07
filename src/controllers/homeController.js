const { Usuario } = require('../models');

const homeController = {
  viewHome: (_req, res) => {
    return res.render('home');
  },
  saveUSer: async (req, res) => {
    const { name, email, message } = req.body;

    await Usuario.create({ name, email, message });

    return res.redirect('/');
  },
};

module.exports = homeController;
