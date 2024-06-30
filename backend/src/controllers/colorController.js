const colorService = require('../services/colorService');

exports.getColors = async (req, res) => {
  try {
    const colors = await colorService.fetchColorPalette();
    res.json(colors);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
