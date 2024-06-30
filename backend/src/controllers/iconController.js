const iconService = require('../services/iconService');

exports.getIcons = async (req, res) => {
  try {
    const icons = await iconService.fetchIcons();
    res.json(icons);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
